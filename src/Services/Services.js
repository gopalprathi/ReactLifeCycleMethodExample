const AccessKey = '/?client_id=2JoT-yGIO6qGmhZ-eUpTi0zgZzHOj_niTxOvVLVccVs';
//const SecretKey = 'wxDSoHEfPOw9KD_iERS_ejMcIVY6vDF3ei4wYk8dWi8';

class Services {

    async getImages(){
        let data = await fetch(`https://api.unsplash.com/collections${AccessKey}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        //console.log(data);
        return data;
    }

    async deleteImage(id){
        let data = await fetch(`https://api.unsplash.com/collections/photo/${id}${AccessKey}`,{method:'delete'})
        .then(res => res.json())
        .then(data => data)
        .catch(error=> null);
        console.log(data);
        return data;
    }
}

export default new Services();