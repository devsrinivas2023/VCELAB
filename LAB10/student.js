
export class Student{
    data = {};
    getInfo() {
        return this.data;
      }
    save(node){
        this.data.push(node);
        return true;
    }
}