const FeatureFlagModel = {
  find: async () => [],
};

const FeatureFlags = {
  flags: new Map(),

  async initialize() {
    const flags = await FeatureFlagModel.find({ active: true });
    flags.forEach((flag) => {
      this.flags.set(flag.name, flag);
    });
  },

  isEnabled(flagName, userId = null) {
    const flag = this.flags.get(flagName);
    if (!flag) return false;

    if (flag.rolloutPercentage < 100) {
      const hash = userId ? this.hashUserId(userId) : Math.random() * 100;
      return hash < flag.rolloutPercentage;
    }

    if (flag.whitelistUsers?.length && userId) {
      return flag.whitelistUsers.includes(userId.toString());
    }

    return flag.enabled;
  },

  hashUserId(userId) {
    let hash = 0;
    const id = String(userId);
    for (let i = 0; i < id.length; i += 1) {
      hash = (hash << 5) - hash + id.charCodeAt(i);
      hash &= hash;
    }
    return Math.abs(hash) % 100;
  },
};

module.exports = FeatureFlags;
