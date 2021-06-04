require('../../Db_Functions/index');
let Item = require('../../Models/Restaurant/items');
let House = require('../../Models/House/house');


var Messages = require("../Messages/admin");
let helpers = require('../../Services/Helper/index')
let moment = require('moment');
const md5 = require('md5');

let ObjectId = require('mongodb').ObjectID;

addHouse = async (data) => {
    let { houseName, images,userId} = data;

   

        let newObj = {
            userId:ObjectId(userId),
            houseName: houseName.toLowerCase(),
            images:images,
        created_on: moment().unix()
    };

    let item = new House(newObj)

        result = await postData(item);

    return helpers.showResponse(true, "House Added", [], null, 200);
}


getHouse = async ({ search_param, string, sort_by, limit, skip, sort_order,userId, category_id }) => {
    let page = 1
    let startIndex = 0
    let queryObject = { status: { $ne:2} ,userId: ObjectId(userId)  }
    let sort = null
    if (skip && limit) {
        page = parseInt(skip);
        limit = parseInt(limit);
        startIndex = (skip - 1) * limit;
    }
    if (search_param && string) {
        queryObject = { [search_param]: { $regex: string,$options:"$i" }, status: { $ne:2 } ,userId: ObjectId(userId) };
    }
    if (string && !search_param) {
        queryObject = { $or:[ {houseName: { $regex: string,$options:"$i" }}], status: { $ne:2} ,userId: ObjectId(userId) };
    }
  
    if (sort_by && sort_order) {
        sort = { [sort_by]: parseInt(sort_order) }
    }

    let result = await getDataArray(House, queryObject, '', { limit: limit, skip: startIndex }, sort);
    let result2 = await getDataArray(House, queryObject, '',null, null);
    
    let data ={
     data:    result.data,
     totalCount:result2.data?result2.data.length:0
    }
    if (result.status) {
        return helpers.showResponse(true, "Success", data, null, 200);
    }
    return helpers.showResponse(false, "No Data", [], null, 200);
}

getCategoryEditId = async ({ item_name, restaurant_id }) => {
    let queryObject = { status: { $ne:2} ,restaurant_id: ObjectId(restaurant_id),item_name: item_name  }
 

    let result = await getDataArray(Item, queryObject, '', null, null);
    let data ={
     data:    result.data,
    }
    if (result.status) {
        return helpers.showResponse(true, "Success", data, null, 200);
    }
    return helpers.showResponse(false, "No Data", [], null, 200);
}


toggleItemStatus = async (data, user_id) => {
    console.log(data, user_id)
    data.updated_on = moment().unix()

   

    let Count = await getCount(Item, { restaurant_id: user_id, _id: data.item_id })
    if (Count.data < 0) {
        return helpers.showResponse(false, "Error", response.data, null, 200);
    }
    let response = await updateData(Item, data, ObjectId(data.item_id));
    console.log(response)
    if (response.status) {
        return helpers.showResponse(true, "Items Status Changed", response.data, null, 200);
    }
    return helpers.showResponse(false, "Failed While Updating Items", null, null, 304);
}

updateHouse = async (data, user_id) => {
    console.log(data, user_id);


    let Count = await getUser(House, {
        _id: ObjectId(data._id),
      });
    console.log('sssss',Count)
      
      if (!Count) {
        return helpers.showResponse(false, "Wrong ID", null, null, 200);
      } 


    // let Count = await getCount(House, {
    //   //userId: ObjectId(user_id),
    //   _id: data._id,
    // });
    // if (Count) {
    //   return helpers.showResponse(
    //     false,
    //     "Not Your Room",
    //     response.data,
    //     null,
    //     200
    //   );
    // }

    let response = await updateData(House, data, ObjectId(data._id));
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
    addHouse,getHouse,getCategoryEditId, toggleItemStatus,
    updateHouse
}