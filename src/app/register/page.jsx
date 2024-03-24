'use client';
import React from 'react'
import { useState } from 'react';

import {
  Card,
  Radio,
  Input,
  Select, Option,
  Button,
  Typography,
} from "@material-tailwind/react";
 
function page() {

  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
    field10: '',
    field11: '',
    field12: '',
    field13: '',
    field14: '',
    field15: '',
    field16: '',
    field17: '',
    field18: '',
    field19: '',
    Experiance:''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    

  
   

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `The ${key} field is required`;
      }
       else {
        
  
        // Validate phone number field
        if (key === 'field19') {
          // Adjust the regular expression for phone number validation according to your requirements
          if (!/^\d{10}$/.test(formData[key].trim())) { // Assuming phone number should be 10 digits
            newErrors[key] = `${key} must be a valid 10-digit phone number`;
          }
        }
        else if(key==='Experiance' ){
           
              if(!(/^\d+$/.test(formData[key].trim()))){
                
                newErrors[key] = `${key} incorect value`;
              }
        }
        else if(key==='field16' ){
           
          if(!(/^\d+$/.test(formData[key].trim()))){
            
            newErrors[key] = `${key} the above Incorect value`;
          }
    }
      else {
        if (!/^[a-zA-Z\s\\]+$/.test(formData[key].trim()) && key !== 'field19' && key !=='Experiance') {
          newErrors[key] = `${key} must contain only letters, spaces, or backslashes`;
        }
      }
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
  
      setErrors(newErrors);
    } else {
  alert("rtrt");
      console.log('Form submitted successfully');
    }
  };


  return (
    <div className=' py-16 w-full  md:px-5  lg:16 flex mx-auto justify-center  '>
    
    <div className=' ' >

    <Card color="transparent"  shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 sm:w-96 md:w-full">

        <div className="mb-1 flex flex-col md:grid  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">

         <div className="">
         <Typography variant="h6" color="blue-gray" className="">
           ሙሉ ስም
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            onChange={handleChange}
            id="field1"
            name="field1"
            value={formData.field1}
            className=" border w-full border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className=" pt-2">
          {errors.field1 && <span className=' text-sm' style={{ color: 'red' }}>{errors.field1}</span>}
          </div>
         </div>

          <div className="">
          <Typography variant="h6" color="blue-gray" className="">
            ስመ ክርስትና
          </Typography>
          <Input
            size="lg"
            placeholder="Christian name"
            onChange={handleChange}
            id="field2"
            name="field2"
            value={formData.field2}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field2 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field2}</span>}
          </div>
         

          <div className="flex  flex-col">
          <Typography variant="h6" color="blue-gray" className=" mx-3">
          ፆታ
          </Typography>
         <div className=" mx-2  pt-2 flex flex-row gap-6 w-full ">
         <Radio name="type" label="ወንድ"  defaultChecked/>
          <Radio name="type" label="ሴት"  />
       
         </div>
      </div>

    
    {/* Adderss of Strudent  */}
   <div >
      

       <Typography variant="h6" color="blue-gray" className="">
           ክልል
          </Typography>
          <Input
            size="lg"
            placeholder="Kill"
            onChange={handleChange}
            id="field3"
            name="field3"
            value={formData.field3}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
  {errors.field3 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field3}</span>}
       
       </div>
       
       <div>
       <Typography variant="h6" color="blue-gray" className="">
           ዞን
          </Typography>
          <Input
            size="lg"
            placeholder="Zone"
            id="field4"
            name="field4"
            onChange={handleChange}
            value={formData.field4}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field4 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field4}</span>}
       
       </div>

       <div >
       <Typography variant="h6" color="blue-gray" className="">
           ወረዳ
          </Typography>
          <Input
            size="lg"
            placeholder="Woreda"
            id="field5"
            name="field5"
            onChange={handleChange}
            value={formData.field5}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field5 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field5}</span>}
       
       </div>

       <div  >
       <Typography variant="h6" color="blue-gray" className="">
           ቀበሌ
          </Typography>
          <Input
            size="lg"
            placeholder="Kebele"
            id="field6"
            name="field6"
            onChange={handleChange}
            value={formData.field6}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field6 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field6}</span>}
       
       </div>
      
   



              {/* student betekrsitial info */}

    <div className="">
    <Typography variant="h6" color="blue-gray" className="">
           የመጡበት አጥቢያ ቤ/ክ
          </Typography>
          <Input
            size="lg"
            placeholder="Church Name"
            id="field7"
            name="field7"
            onChange={handleChange}
            value={formData.field7}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         {errors.field7 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field7}</span>}
       
     </div>

      <div className="">
        <Typography variant="h6" color="blue-gray" className="">
           የሚማሩት ትምህርት አይነት
          </Typography>
          <Input
            size="lg"
            placeholder="Cources type"
            id="field8"
            name="field8"
            onChange={handleChange}
            value={formData.field8}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field8 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field8}</span>}
       
            </div>


   <div className="">
   <Typography variant="h6" color="blue-gray" className="">
           ግቢ የገቡበት ዓ.ም
          </Typography>
          <Input
            size="lg"
            placeholder="Year of Entry"
            id="field9"
            name="field9"
            onChange={handleChange}
            value={formData.field9}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field9 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field9}</span>}
       
   </div>



 {/* የሰንበት ት/ት አገልግሎት ሁኔታ */}
  

   


       <div >
       {/* <Typography variant="h6" color="blue-gray" className=" pb-2">
      የሰንበት ት/ት አገልግሎት ሁኔታ
          </Typography> */}
       <Typography variant="h6" color="blue-gray" className="">
       የአገልግሎት ጊዜ ብዛት
          </Typography>
          <Input
            size="lg"
            placeholder="Experiance"
            id="Experiance"
            name="Experiance"
            onChange={handleChange}
            value={formData.Experiance}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.Experiance && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.Experiance}</span>}
        </div>
       

       <div  >
       <Typography variant="h6" color="blue-gray" className="">
       የተማሩት ት/ት አይነት
          </Typography>
          <Input
            size="lg"
            placeholder="Education you have studied"
            onChange={handleChange}
            id="field11"
            name="field11"
            value={formData.field11}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

{errors.field11 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field11}</span>}
       
       </div>

       <div >
       <Typography variant="h6" color="blue-gray" className="">
       የአግልግሎት ድረሻ 
          </Typography>
          <Input
            size="lg"
            placeholder="Service area"
            id="field12"
            name="field12"
            onChange={handleChange}
            value={formData.field12}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field12 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field12}</span>}
       </div>
  
      {/* ስልጣነ ክህነት */}

      <div className="">
      <Typography variant="h6" color="blue-gray" className="">
      ስልጣነ ክህነት
          </Typography>
          <Input
            size="lg"
            placeholder="Priesthood"
            id="field13"
            name="field13"
            onChange={handleChange}
            value={formData.field13}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field13 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field13}</span>}
       
      </div>

        <div className="">
        <Typography variant="h6" color="blue-gray" className=" flex justify-between">
          ተጨማሪ የሚችሉት ቋንቋ አይነት
          </Typography>

          <Select
                    placeholder="USA"
                    className=" flex justify-center items-center  border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none w-full  py-1 h-11 bg-white px-3"
                    labelProps={{  className: "h-2 before:content-none after:content-none", }}
                    menuProps={{ className: " h-20" }}
                  >
                      <Option >ኦሮምኛ </Option>
                      <Option >ትግርኛ</Option>
                      <Option > አይ የለኝም</Option>
                    
                  </Select>

         
        </div>

{/* የንስሃ አባት ስም   */}
    
        <div className="">
        <Typography variant="h6" color="blue-gray" className="">
           የንስሃ አባት ስም 
           </Typography>
          <Input
            size="lg"
            placeholder="Name Father of Repentance"
            id="field14"
            name="field14"
            onChange={handleChange}
            value={formData.field14}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field14 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field14}</span>}
       
        </div>

{/* ልዩ ተሰጥኦ ካላቸዉ (በድምጽ ፣በስዕል ፣በእጅ ስራ …) */}

           <div className="">
           <Typography variant="h6" color="blue-gray" className="">
            ልዩ ተሰጥኦ ካላቸዉ
            </Typography>
          <Input
            size="lg"
            placeholder="Special Talent"
            id="field15"
            name="field15"
            onChange={handleChange}
            value={formData.field15}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field15 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field15}</span>}
       
           </div>

{/* የአገልግሎት ክፍል */}


       <div >
       {/* <Typography variant="h6" color="blue-gray" className=" pb-2">
      የአገልግሎት ክፍል
          </Typography> */}
       <Typography variant="h6" color="blue-gray" className="">
       ክፍል 
          </Typography>
          <Input
            size="lg"
            placeholder="Class"
            id="field16"
            name="field16"
            onChange={handleChange}
            value={formData.field16}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field16 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field16}</span>}
       
       </div>
       
       <div >
       <Typography variant="h6" color="blue-gray" className="">
       ኃላፊነት
          </Typography>
          <Input
            size="lg"
            placeholder="Responsiblity"
            id="field17"
            name="field17"
            onChange={handleChange}
            value={formData.field17}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field17 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field17}</span>}
       
       </div>

     
     


     {/* ተከታታይ ትምህርት ሁኔታ */}
 


       <div >
       <Typography variant="h6" color="blue-gray" className="">
       ከ2ኛ ዓመት በላይ ከሆኑ ከዚህ በፊት የተጠሰጡ ትምህርቶችን ተምረዋል?
          </Typography>
          <div className="flex gap-10 pt-2">
      <Radio name="second" label="yes" defaultChecked />
      <Radio name="second" label="No"  />
    </div>
        
       </div>
       
       <div  >
     
       <Typography variant="h6" color="blue-gray" className="">
       አሁን እየተሰጡ ያሉ ትምህርቶችን እየተማሩ ነዉ?
          </Typography>
          <div className="flex gap-10 pt-2">
      <Radio name="learn" label="yes" defaultChecked />
      <Radio name="learn" label="No"  />
    </div>
       </div>

       <div >
       <Typography variant="h6" color="blue-gray" className="">
       ከዚህ በፊት ያለፈዎትን ትምህርቶችን ቢመቻች ለመማር ዝግጁ ነዎት?
          </Typography>
          <div className="flex gap-10 pt-2">
      <Radio name="Interset" label="yes" defaultChecked />
      <Radio name="Interset" label="No"  />
    </div>
       </div>
    



        {/* በግቢ ጉባኤ የወሰዱት ስልጠና ካለ  */}
       <div className="">
       <Typography variant="h6" color="blue-gray" className="">
       በግቢ ጉባኤ የወሰዱት ስልጠና ካለ 
          </Typography>
          <Input
            size="lg"
            placeholder="Responsiblity"
            id="field18"
            name="field18"
            onChange={handleChange}
            value={formData.field18}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
           {errors.field18 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field18}</span>}
       
       </div>
  
         <div className="">
         <Typography variant="h6" color="blue-gray">
           ስልክ ቁጥር 
          </Typography>

          <Input
            size="lg"
            placeholder="Phone Number"
            id='field19'
            name='field19'
            value={setFormData.field19}
            onChange={handleChange}
            className=" border border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none px-4 py-2 h-12 " 
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <div className="">
          {errors.field19 && <span  className=' mt-4 text-sm' style={{ color: 'red' }}>{errors.field19}</span>}
       
          </div>
         </div>
          
        </div>

    


       <div className='flex justify-between items-center w-full '>
       <Button type='submit' className="mt-6 w-44 py-4 bg-black text-white" >
          sign up
        </Button>
      <Input type="file" className='w-44 py-3 mt-5  rounded-lg bg-black text-white'  name="upload file" id="" />
       </div>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  
  </div>
  )
}

export default page