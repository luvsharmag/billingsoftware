// import React, { useEffect, useState } from 'react'
// import NewInvoicePage from './Invoice/AddNewInvoice'
// import ShowInvoicePage from './Invoice/ShowInvoices'
// import NewQuotationPage from './Quotation/NewQuotationPage'
// import ShowQuotationPage from './Quotation/ShowQuotationPage'
// import NewCreditDebitNotePage from './CreditDebitNote/NewCreditDebitNote'
// import ShowCreditDebitNotePage from './CreditDebitNote/ShowCreditDebitNote'
// import NewPaymentDocScreen from './PaymentDocument/NewPaymentDocScreen'
// import ShowPaymentDocScreen from './PaymentDocument/ShowPaymentDocScreen'
// import ShowClientPage from './Client/ShowClients'
// import NewProductServicePage from './ProductService/AddNewProductService'
// import ShowProductServicePage from './ProductService/ShowProductServices'

// export default function ModuleSalePage({page}) {
//     const [currentPage,setCurrentPage] = useState(<></>)
//     const [opt,setOpt] = useState(page)
//     useEffect(()=>{
//         switch(opt){
//             case "newinvoice":
//                 setCurrentPage(<NewInvoicePage />)
//                 break
//             case "showinvoice":
//                 setCurrentPage(<ShowInvoicePage />)
//                 break
//             case "newquotation":
//                 setCurrentPage(<NewQuotationPage />)
//                 break
//             case "showquotation":
//                 setCurrentPage(<ShowQuotationPage />)
//                 break
//             case "newcreditnote":
//                 setCurrentPage(<NewCreditDebitNotePage type_="credit" />)
//                 break
//             case "showcreditnote":
//                 setCurrentPage(<ShowCreditDebitNotePage type_="credit" />)
//                 break
//             case "newdebitnote":
//                 setCurrentPage(<NewCreditDebitNotePage type_="debit" />)
//                 break
//             case "showdebitnote":
//                 setCurrentPage(<ShowCreditDebitNotePage type_="debit" />)
//                 break
//             case "newpaymentnote":
//                 setCurrentPage(<NewPaymentDocScreen />)
//                 break
//             case "showpaymentnote":
//                 setCurrentPage(<ShowPaymentDocScreen />)
//                 break
//             case "showclient":
//                 setCurrentPage(<ShowClientPage />)
//                 break
//             case "newproductservice":
//                 setCurrentPage(<NewProductServicePage />)
//                 break
//             case "showproductservice":
//                 setCurrentPage(<ShowProductServicePage />)
//                 break
                    
            
//         }
//     },[opt])
//   return (
//     <div className='flex flex-col w-screen h-screen'>
        
//         <div className='flex-1'>
//             {currentPage}
//         </div>
//     </div>
//   )
// }
