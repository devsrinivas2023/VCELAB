
export class Student{
    data = [];
    getInfo() {
        return this.data;
      }
    save(node){
        this.data.push(node)
        return true;
    }
    updatename(node,id){
        var i=0;
        while(i<this.data.length){
            if(this.data[i].id==id){
                this.data[i].name= node.name;
                return true;
            }
            i=i+1;
        }
        
        return false;

    }
    updatecollege(node,id){
        var i=0;
        while(i<this.data.length){
            if(this.data[i].id==id){
                this.data[i].college = node.college;
                return true;
            }
            i=i+1;
        }
        return false;
    }
    updatestudent(node,id){
        try{
            this.updatename(node,id);
            this.updatecollege(node,id);
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}