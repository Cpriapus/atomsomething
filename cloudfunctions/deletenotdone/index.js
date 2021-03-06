// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
const bwlCollection = db.collection('bwl')
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await bwlCollection.where({
      isdone: false
    }).remove()
  } catch (e) {
    console.error(e)
  }
}