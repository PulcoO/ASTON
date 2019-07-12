class Actor{
    constructor(id,name,geo,adress,createdAt,updatedAt,website,description,openhours_more_infos){
        this.id = id;
        this.name = name;
        this.geo = geo;
        this.adress = adress;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.website = website;
        this.description = description;
        this.openhours_more_infos = openhours_more_infos;
    }
    getName(){
        return this.name;
    }
    setName(params){
        this.name = params;
    }
}
module.exports = Actor;