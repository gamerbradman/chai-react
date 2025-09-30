import conf from '..conf/conf.js'
import {Client , ID , Databases , Storage , Query, TablesDB} from "appwrite"
import { use } from 'react';

export class Service {
    client = new Client()
    databases;
    storage;

    constructor (){
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases= new TablesDB(this.client)
        this.bucket   = new Storage(this.client)
    }

    async createPost ({title , slug , content , featuredImage , status , userId}){
            try {
                // return await this.databases.createDocuement(
                // conf.appwriteDatabaseId,
                // conf.appwriteCollectionId,
                // slug,
                // {
                //     title,
                //     content,
                //     featuredImage,
                //     status,
                //     userId
                // }
                return await this.databases.createRow({
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    rowId:slug,
                    data:{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                    }

                })
            
            } catch (error) {
                console.log("Appwrite service :: createPost :: error", error);
            }
    }


    async updatePost (slug , {title,content,featuredImage,status}) {
            try {
              return await this.databases.updateRow({
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    rowId:slug,
                    data:{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                    }
            })
                
            } catch (error) {
                console.log("Appwrite service :: updatePost :: error", error);
            }
    }


    
     async deletePost(slug){
        try {
            await this.databases.deleteRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteCollectionId,
                rowId:slug
            
            })
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }


    async getPost(slug){
        try {
            return await this.databases.getRow({
                databaseId:conf.appwriteDatabaseId,
                tableId:conf.appwriteCollectionId,
                rowId: slug
            
        })
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listRows({
              databaseId:  conf.appwriteDatabaseId,
              tableId:  conf.appwriteCollectionId,
              queries:  queries,
                

          })
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }



    //file upload

     async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId:conf.appwriteBucketId,
                fileId:ID.unique(),
                file:file
        })
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId:conf.appwriteBucketId,
               fileId: fileId
         })
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }


    getFilePreview(fileId){
        return this.bucket.getFilePreview({
          bucketId:  conf.appwriteBucketId,
          fileId:  fileId
        })
    }
}





const service = new Service()
export default service