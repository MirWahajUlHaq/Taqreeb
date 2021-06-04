require('../../Db_Functions/index');

let Item = require('../../Models/Item/item');
let House = require('../../Models/House/house');
let  = require('../../Models/House/house');


var Messages = require("../Messages/admin");
let helpers = require('../../Services/Helper/index')
let moment = require('moment');
const md5 = require('md5');

let ObjectId = require('mongodb').ObjectID;

addItem = async (data) => {
    let { itemName, images,userId,houseId,roomId,description} = data;

   

        let newObj = {
            userId:ObjectId(userId),
            houseId:ObjectId(houseId),
            roomId:ObjectId(roomId),
            itemName: itemName.toLowerCase(),
            description: description,
            images:images,
            created_on: moment().unix()
    };

    let itemAdd = new Item(newObj)

        result = await postData(itemAdd);
        if (result.status) {
            return helpers.showResponse(true, "Item Added",  result.data, null, 200);
          }
        
          return helpers.showResponse(false, "Failed", [], null, 203);
}


getItem = async ({ search_param, string, sort_by, limit, skip, sort_order,userId, houseId, roomId }) => {
    let page = 1
    let startIndex = 0
    let queryObject = { status: { $ne:2} ,userId: ObjectId(userId),houseId: ObjectId(houseId),roomId: ObjectId(roomId)  }
    let sort = null
    if (skip && limit) {
        page = parseInt(skip);
        limit = parseInt(limit);
        startIndex = (skip - 1) * limit;
    }
    if (search_param && string) {
        queryObject = { [search_param]: { $regex: string,$options:"$i" }, status: { $ne:2 } ,userId: ObjectId(userId),houseId: ObjectId(houseId),roomId: ObjectId(roomId) };
    }
    if (string && !search_param) {
        queryObject = { $or:[ {itemName: { $regex: string,$options:"$i" }}], status: { $ne:2} ,userId: ObjectId(userId),houseId: ObjectId(houseId),roomId: ObjectId(roomId) };
    }
  
    if (sort_by && sort_order) {
        sort = { [sort_by]: parseInt(sort_order) }
    }

    let result = await getDataArray(Item, queryObject, '', { limit: limit, skip: startIndex }, sort);
    let result2 = await getDataArray(Item, queryObject, '',null, null);
    
    let data ={
     data:    result.data,
     totalCount:result2.data?result2.data.length:0
    }
    if (result.status) {
        return helpers.showResponse(true, "Success", data, null, 200);
    }
    return helpers.showResponse(false, "No Data", [], null, 200);
}


updateItem = async (data, user_id) => {

    let Count = await getUser(Item, {
        _id: ObjectId(data._id),
      });
      
      if (!Count) {
        return helpers.showResponse(false, "Wrong Id", null, null, 200);
      } 
    let response = await updateData(Item, data, ObjectId(data._id));
    console.log(response);
    
    if (response.status) {
      return helpers.showResponse(true, "Item Updated", response.data, null, 200);
    }
    return helpers.showResponse(
      false,
      "Failed While Updating Item",
      null,
      null,
      304
    );
  };

module.exports = {
    addItem,
    getItem,
    getCategoryEditId, 
    toggleItemStatus,
    updateItem
}