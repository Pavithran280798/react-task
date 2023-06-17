import React from 'react'

const text = "Unlimited Public Project";
const text1 = "Community Access";
const text2 = "Unlimited Private Project";
const text3 = "Dedicated Phone Support";
const text4 = "Free Subdomain";
const text5 = "Monthly Status Reports";
const tick ="✓";
const wrong ="☓";


const padding = {
  padding:'8px',
  fontSize: '20px'
  
};

function App() {
  return (
    <div>
       <table style={{ border:'1px solid black'}}>
         <tr style={{textAlign:'center'}}>
          <td>FREE</td>
          <td>PLUS</td>
          <td>PRO</td>
         </tr>
         <tr style={{textAlign:'center'}}>
          <td><span style={{fontSize:'30px'}}>$0</span>/month</td>
          <td><span style={{fontSize:'30px'}}>$9</span>/month</td>
          <td><span style={{fontSize:'30px'}}>$49</span>/month</td>
         </tr>
         <tr>
            <td style={padding}> <b>{tick}</b> Single User </td>
            <td style={padding}> <b>{tick} 5 Users</b> </td>
            <td style={padding}> <b>{tick} Unlimited Users</b> </td>
         </tr>
         <tr>
            <td style={padding}> <b>{tick}</b> 5GB Storage </td>
            <td style={padding}> <b>{tick}</b> 50GB Storage </td>
            <td style={padding}> <b>{tick}</b> 150GB Storage </td>
         </tr>
         <tr>
            <td style={padding}> <b>{tick}</b> {text} </td>
            <td style={padding}> <b>{tick}</b> {text} </td>
            <td style={padding}> <b>{tick}</b> {text} </td>
         </tr>
         <tr>
            <td style={padding}> <b>{tick}</b> {text1} </td>
            <td style={padding}> <b>{tick}</b> {text1} </td>
            <td style={padding}> <b>{tick}</b> {text1} </td>
         </tr>
         <tr>
            <td style={padding}> <b>{wrong}</b> {text2} </td>
            <td style={padding}> <b>{tick}</b> {text2} </td>
            <td style={padding}> <b>{tick}</b> {text2} </td>
         </tr>
         <tr>
            <td style={padding}> <b>{wrong}</b> {text3} </td>
            <td style={padding}> <b>{tick}</b> {text3} </td>
            <td style={padding}> <b>{tick}</b> {text3} </td>
         </tr>
         <tr>
            <td style={padding}> <b>{wrong}</b> {text4} </td>
            <td style={padding}> <b>{tick}</b> {text4} </td>
            <td style={padding}> <b>{tick} Unlimited</b> {text4} </td>
         </tr>
         <tr>
            <td style={padding}> <b>{wrong}</b> {text5} </td>
            <td style={padding}> <b>{wrong}</b> {text5} </td>
            <td style={padding}> <b>{tick}</b> {text5} </td>
         </tr>
         <tr>
          <td><button style={{ backgroundColor:'blue',fontSize:'20px' }} >BUTTON</button></td>
          <td><button style={{ backgroundColor:'blue',fontSize:'20px' }} >BUTTON</button></td>
          <td><button style={{ backgroundColor:'blue',fontSize:'20px' }} >BUTTON</button></td>
         </tr>
         </table>
       </div>
  )
}

export default App

