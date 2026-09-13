from __future__ import annotations

from functools import lru_cache
from typing import Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


EmailService = Literal["gmail", "aws-ses", "ses", "sendgrid", "custom"]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    PORT: int = 3001
    NODE_ENV: str = "development"
    ENVIRONMENT: str | None = None

    MONGODB_URI: str | None = None
    MONGO_URI: str | None = None
    MONGODB_DB_NAME: str = "thegivingcircle"

    FRONTEND_URL: str = "http://localhost:3000"
    TRUST_PROXY_HOPS: int = 1

    EMAIL_SERVICE: EmailService = "gmail"
    EMAIL_USER: str = ""
    EMAIL_PASSWORD: str = ""
    FROM_EMAIL: str = ""
    RECEIVER_EMAIL: str = "hello@thegivingcircle.in"

    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_SECURE: bool = False
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    SENDGRID_API_KEY: str = ""

    OPENAI_API_KEY: str = ""
    OPENAI_MODEL: str = "gpt-4o-mini"
    BLOG_UPDATE_SECRET: str = ""

    CLOUDINARY_CLOUD_NAME: str = ""
    CLOUDINARY_API_KEY: str = ""
    CLOUDINARY_API_SECRET: str = ""

    @field_validator("SMTP_SECURE", mode="before")
    @classmethod
    def parse_bool(cls, value: object) -> bool:
        if isinstance(value, bool):
            return value
        if value is None or value == "":
            return False
        return str(value).strip().lower() in {"1", "true", "yes", "on"}

    @property
    def environment(self) -> str:
        raw = (self.ENVIRONMENT or self.NODE_ENV or "development").strip().lower()
        return "production" if raw == "production" else "development"

    @property
    def is_production(self) -> bool:
        return self.environment == "production"

    @property
    def mongodb_uri(self) -> str:
        uri = (self.MONGODB_URI or self.MONGO_URI or "").strip()
        return uri

    @property
    def from_email(self) -> str:
        return (self.FROM_EMAIL or self.EMAIL_USER or "").strip()


@lru_cache
def get_settings() -> Settings:
    return Settings()
