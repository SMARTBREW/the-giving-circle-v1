const Counter = require('../models/counter.model');

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await Counter.findOneAndUpdate(
    { sequenceName },
    { $inc: { sequenceValue: 1 } },
    { new: true, upsert: true },
  );
  return sequenceDocument.sequenceValue;
}

async function generateEmployeeId() {
  const nextCounter = await getNextSequenceValue('employeeId');
  const employeeId = `GC-${nextCounter + 10000}`;
  return employeeId;
}

function generatedPassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const special = '@$!%*?&';
  const randomChars = Array(5)
    .fill()
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
  const randomNums = Array(2)
    .fill()
    .map(() => nums[Math.floor(Math.random() * nums.length)])
    .join('');
  const randomSpecial = special[Math.floor(Math.random() * special.length)];
  return `Aa${randomChars}${randomNums}${randomSpecial}`;
}

module.exports = { getNextSequenceValue, generateEmployeeId, generatedPassword };
