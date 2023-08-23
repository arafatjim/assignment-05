
let total=0;
const coupon= "SELL200";
const couponBtn=document.getElementById('coupon');
const parcheseBtn=(document.getElementById('btnParchese').disabled=true);
couponBtn.disabled=true;

function cardClickBtn(target){
         
          const selectedItemContainer=document.getElementById('selected-items');
          const parcheseBtn=(document.getElementById('btnParchese').disabled=false);
          const itemName=target.childNodes[3].innerText;
          const li=document.createElement("li");
           li.innerText=itemName;
          selectedItemContainer.appendChild(li)
          
          const price=target.childNodes[5].innerText.split(" ")[0];
         total=parseInt(total) + parseInt(price);
         const firstTotal=(document.getElementById('subTotal').innerText=total);
         finalTotal=(document.getElementById('grandTotal').innerText=firstTotal);
         
         const couponCode=(document.getElementById('couponInput').value);
         
          if(total >= 200){
          couponBtn.disabled=false;
          
          }
          
          
         document.getElementById('coupon').addEventListener('click',function(){
          const couponCode=document.getElementById('couponInput').value;

          
        
          
          if( couponCode == "SELL200" && firstTotal >= 200){
                    //couponBtn.disabled=false;
                    
                    
                    const discount= firstTotal * 0.2;
                    const newTotal=firstTotal - discount;
                    const discountPrice=(document.getElementById('discountPrice').innerText=discount);
                    console.log(discountPrice);
                    discountPrice.toFixed(4);
                    
                    const finalTotal=(document.getElementById('grandTotal').innerText=newTotal);
          }
          
          
          
         });
         
         const modalBtn=document.getElementById('btnModal');
         

         
         
         
         
         
}