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
module.exports={
    phoneno
}