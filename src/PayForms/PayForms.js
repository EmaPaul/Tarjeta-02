import React,{useState}from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './PayForms.css';

const PaymentForms=function(){
    
    const [state,setState] = useState({
        number:"",
        name:"",
        expiry:"",
        cvc:"",
        focus:""
    })

    function handleInputeChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    function handleFocusChange(e){
        setState({
            ...state,
            focus:e.target.name
        })
    }

    function processPayment(){
        if(state.name.length===0 ||state.number.length===0 || state.expiry.length===0 ||state.cvc.length===0){
            alert("complete el formulario")
        }else{
            console.log("name => " , state.name)
            console.log("number => " , state.number)
            console.log("expiry => " , state.expiry)
            console.log("cvc => " , state.cvc)
            console.log(JSON.stringify(state))
            alert("Pago realizado con exito!!")
        }
    }

    function soloLetras(event) {
        var regex = new RegExp("^[a-zA-Z ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
          event.preventDefault();
          alert("solo se aceptan en este campo letras")
          return false;
        }
    }

    function soloNumeros(event){
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
           event.preventDefault();
           alert("en este campo solo se aceptan numeros")
           return false;
        }
    }


    return(
        
        <div className="card">
            <div className="card-body">
            <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
            />
            
            <form>
                
                <div className="form-group">
                    <label htmlFor='number' className="strings">Numero de la tarjeta:</label>
                    <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control"
                    onChange={handleInputeChange}
                    onFocus={handleFocusChange}
                    onKeyPress={soloNumeros}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='name' className="strings1">Nombre:</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength="30"
                    className="form-control"
                    onChange={handleInputeChange}
                    onFocus={handleFocusChange}
                    onKeyPress={soloLetras}
                    />
                </div>
                
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor='expiry' className="strings2" >Fecha de vencimiento:</label>
                    <input
                    type="text"
                    name="expiry"
                    id="expery"
                    maxLength="4"
                    className="form-control"
                    onChange={handleInputeChange}
                    onFocus={handleFocusChange}
                    onKeyPress={soloNumeros}
                    />
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor='cvc' className="strings3" >CVC:</label>
                    <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="3"
                    className="form-control"
                    onChange={handleInputeChange}
                    onFocus={handleFocusChange}
                    onKeyPress={soloNumeros}
                    />
                </div>
                </div>
                
                <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">PAGAR</button>
            </form>
            </div>
        </div>
    )
}

export default PaymentForms;
