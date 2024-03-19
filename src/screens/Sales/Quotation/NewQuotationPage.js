import { Button, Select, Textarea, Typography, Option, Input, Checkbox } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { ProductInvoiceTable } from '../components/ProductInvoiceTable'
import SelectComp from '../components/SelectComp';

const TABLE_HEAD = ["No", "Product Service", "HSNSAC", "Description","UoM", "Qty", "Unit Price", "Value","Discount", "CGST", "SGST", "IGST","Action"];
 
const TABLE_ROWS = [
  
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  
];

const select_option = [
  {
    "text":"HTML",
    "value":"HTML",
  },
  {
    "text":"Js",
    "value":"JS",
  },
  {
    "text":"C++",
    "value":"C++",
  },
  {
    "text":"Java",
    "value":"Java",
  }
]



export default function NewQuotationPage() {
  useEffect(()=>{
    document.title = "New Quotation"
  },[])
  const handleSelect = (type,value)=>{
    console.log(type,value)
  }
  return (
    <div className='flex flex-col w-full h-full px-5'>

      <div className='flex flex-col border border-gray-400 p-3 mb-3'>
        <div className='my-2 flex-1'>
          <Typography variant='h6'>Document Data</Typography>
          <hr/>
        </div>
        <div className='flex flex-row w-full justify-between my-2'>
          <div className='mr-12'>
            <SelectComp label="Client" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Document No" placeholder="Document No"/>
          </div>
          <div className='mr-12'>
            <Input variant="outlined" label="Issue Date" placeholder="Date" type='date'/>
          </div>
        </div>




        <div className='flex flex-row w-full justify-between my-2'>
          <div className='mr-12'>
            <SelectComp label="Ship to" options={select_option} isinput={false} handle={handleSelect} />
          </div>
          <div className=' mr-12'>
            <Input variant="outlined" label="PO Number" placeholder="PO Number"/>
          </div>
          <div className=' mr-12'>
            <SelectComp label="PO Date" options={select_option} isinput={true} handle={handleSelect} />
          </div>
        </div>


        <div className='flex flex-row w-full justify-between my-2'>
          <div className='mr-12'>
            <Input variant="outlined" label="Project" placeholder="Project" type=''/>
          </div>
          <div className='mr-12'>
            
          </div>
          <div className='mr-12'>
            <SelectComp label="Place of Supply" options={select_option} isinput={false} handle={handleSelect} />
          </div>
        </div>
      </div>
      <hr/>

      <div className='flex my-2 w-screen'>
        <div className='mr-2'>
          <SelectComp label="Product" options={select_option} isinput={false} handle={handleSelect} />
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Description" placeholder="Description" />
        </div>
        <div className='mr-2'>
          <SelectComp label="UoM" options={select_option} isinput={false} handle={handleSelect} />
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Qty" placeholder="Qty" />
        </div>
        <div className='mr-2'>
          <Input variant="outlined" label="Unit Price" placeholder="Unit Price" />
        </div>
        
        <div className='mr-2'>
          <SelectComp label="Tax" options={select_option} isinput={false} handle={handleSelect} />
        </div>
        
        <div className='mr-2'>
          <Button>+</Button>
        </div>
      </div>

      <hr/>


      <div className='flex flex-1 mb-2 h-full'>
        <ProductInvoiceTable TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS}/>
      </div>
      
      <div className='flex w-full flex-row'>
        <div className=''>
          
          <div className='flex items-center'>
            <div><Checkbox label="Discount on all" /></div>
            <div><input className='border border-gray-600 w-32 mx-2' /></div>
          </div>
          <div className='flex items-center'>
            <div className='mr-7'><Checkbox label="Add Shoping and Packaeg Cost" /></div>
            <div className=''><SelectComp label="Client" options={select_option} isinput={false} handle={handleSelect} /></div>
            
          </div>
        </div>

        <div className=''>
          <div>
            <Checkbox label="Show CESS" />
          </div>
          <div>
            <Checkbox label="Subject to reverse charges" />
          </div>
          <div className='flex w-16'>
            <Checkbox/>
            <SelectComp label="" options={select_option} isinput={false} handle={handleSelect} />
          </div>
        </div>
        <div>
          <div className="mr-5">
            <Textarea label="Notes" />
          </div>
          <div className="mr-5">
            <Textarea label="Private Notes" />
          </div>
          <div className="py-2 self-end">
            <Button>Preview Document</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
