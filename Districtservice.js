export function GetDistrictsList() {
     let BaseUrl = 'http://boxfarming.in/jslps/index.php/jslps_livelihood/master_district_list';

    return new Promise((resolve,reject) => {

        fetch(BaseUrl,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify()
        })
        .then((response) => {
            return response.json();
          })
          .then((jsonObject) => {
            resolve(jsonObject);
          })
          .catch((error) => {
            document.write(error);
          });
    });
}
export function GetBlocksList(distID) {
     let BaseUrl = 'http://boxfarming.in/jslps/index.php/jslps_livelihood/master_block_list';



     let postData = {"dist_id": distID,"user_id": "1"};

    console.log(JSON.stringify(postData))
    return new Promise((resolve,reject) => {

      fetch(BaseUrl,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(postData)
        })
        .then((response) => {
            return response.json();
          })
          .then((jsonObject) => {
            resolve(jsonObject);
          })
          .catch((error) => {
            document.write(error);
          });
    });
}
export function GetpanchayatList(distID,blockID) {
    let BaseUrl = 'http://boxfarming.in/jslps/index.php/jslps_livelihood/master_panchayat_list';



    let postData = {"dist_id": distID,"blk_id": blockID, "user_id":"1"};
    console.log(JSON.stringify(postData))

    return new Promise((resolve,reject) => {


      fetch(BaseUrl,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(postData)
        })
        .then((response) => {
            return response.json();
          })
          .then((jsonObject) => {
            resolve(jsonObject);
          })
          .catch((error) => {
            document.write(error);
          });
    });
}
export function GetVillagesList(distID,blockID,panchayatID) {
     let BaseUrl = 'http://boxfarming.in/jslps/index.php/jslps_livelihood/master_village_list';



     let postData = {"dist_id": distID,"blk_id": blockID, "panchayat_id": panchayatID, "user_id": "1"};

    console.log(JSON.stringify(postData))
    return new Promise((resolve,reject) => {

      fetch(BaseUrl,{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(postData)
        })
        .then((response) => {
            return response.json();
          })
          .then((jsonObject) => {
            resolve(jsonObject);
          })
          .catch((error) => {
            document.write(error);
          });
    });
}
