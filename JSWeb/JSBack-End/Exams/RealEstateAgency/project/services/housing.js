const mongoose = require('mongoose');
const Housing = require('../models/Housing');

async function addHouse(data) {
  const newHouse = new Housing(data);
  await newHouse.save();
}

async function homePageHouses() {
  const data = await Housing.find({}).sort({ _id: -1 }).limit(3).lean();
  return data;
}

async function getAllHouses() {
  const data = await Housing.find({}).lean();
  return data;
}

async function getHouseById(id) {
  return Housing.findById(id).populate('rented').lean();
}

async function updateHouse(id, data) {
    const house = await Housing.findById(id).lean();
    house.name = data.name;
    house.type = data.type;
    house.year = data.year;
    house.city = data.city;
    house.image = data.image;
    house.description = data.description;
    house.available = data.available;

    await house.save();
}

async function deleteHouse(id) {
  await Housing.findByIdAndRemove(id);
}

async function rentHouse(houseId, userId) {
  const house = await Housing.findById(houseId);

  if (!house) {
    throw new Error("House doesn't exist");
  }

  if (house.rented.some((id) => id == userId)) {
    throw new Error('Already rented');
  }

  house.available--;
  house.rented.push(userId);
  await house.save();
}

async function searchHouse(type) {
  const searchRegex = new RegExp(type, 'i');
  return await Housing.find({ type: { $regex: searchRegex } }).lean();
}

module.exports = {
  addHouse,
  homePageHouses,
  getAllHouses,
  getHouseById,
  updateHouse,
  deleteHouse,
  rentHouse,
  searchHouse,
};
