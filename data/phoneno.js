const fs=require('fs');

//Functionality to generate random phone number with series 9413
let phoneno=()=>{
    let numbers=[]
    for(let i=0;i<100;i++){
        let number='9413';
        let random=Math.floor(Math.random()*1000000);
        number=number+random;
        if(number.length===10){
            numbers.push(number)
        }

    }
    // storeData('phone.txt',numbers);

    readWriteData('phone.txt',numbers);

}


//To write the data into files

let storeData=(filename,data)=>{
    data=`${data}\n`;
    fs.appendFile(filename,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Phone Number added successfully');   
        console.log(__dirname)
        console.log(__filename)   
    });

}



let readWriteData=(filename,data)=>{
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err) throw err;
        fs.writeFile('phone.txt',data,'utf-8',(err)=>{
            if(err) throw err;
        console.log("Data is Saved in file");
    });
    }
    );
}


let data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// fs.writeFile('data.txt',data,'utf-8',(err)=>{
//     if(err) throw err;
//     console.log("Data is Saved in file");
// });


//Read The data from a file 
fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log("Reading the data");
});

module.exports = {
data};
