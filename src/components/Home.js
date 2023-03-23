import React, { useState } from 'react'
import './Home.css';

function Calculator () {

        const [price, setPrice] = useState(0);
        const [adBudget, setAdBudget] = useState(0);
        const [unitSold, setUnitSold] = useState(0);
        const [value, setValue] = useState(0);
        const [selectedValue, setSelectedValue] = useState('');
      
        const handlePriceChange = e => {
            setPrice(Number(e.target.value));
          }
        
        const handleUnitSoldChange = e => {
            setUnitSold(Number(e.target.value));
          }

        const handleAdBudgetChange = e => {
            setAdBudget(Number(e.target.value));
          }
      
        const handleChange = e => {
          setSelectedValue(e.target.value);
        }
      
        const handleSubmit = e => {
          e.preventDefault();
          switch (selectedValue) {
            case '10%':
              setValue(adBudget + price * 0.1 * unitSold);
              break;
            case '15%':
              setValue(adBudget + price * 0.15 * unitSold);
              break;
            case '20%':
              setValue(adBudget + price * 0.2 * unitSold);
              break;
            case '25%':
              setValue(adBudget + price * 0.25 * unitSold);
              break;            
            case '30%':
              setValue(adBudget + price * 0.3 * unitSold);
              break;
            case '40%':
              setValue(adBudget + price * 0.4 * unitSold);
              break;
            case '50%':
                setValue(adBudget + price * 0.5 * unitSold);
                break;
            case '1+1':
                setValue(adBudget + price * 0.5 * unitSold);
                break;
            case '2+1':
                setValue(adBudget + price * 0.33 * unitSold);
                break;
            case '2+2':
                setValue(adBudget + price * 0.5 * unitSold);
                break;
            case '1+50%':
                setValue(adBudget + price * 0.25 * unitSold);
                break;
            default:
              break;
          }
        }



        return (
            <div className='calculator'>
              <form onSubmit={handleSubmit}>
                <div className='data'>

                    <div className='price'>
                        <label>
                        Original Price: 
                        <input type="number" name="price" value={price} onChange={handlePriceChange} />
                        </label>
                    </div>
                
                    <div className='unit-sold'>
                    <label>
                        Units Sold: 
                        <input type="number" name="unitSold" value={unitSold} onChange={handleUnitSoldChange} />
                    </label>
                    </div>

                    <div className='ad-budget'>
                    <label>
                        Advertising Budget: 
                        <input type="number" name="adBudget" value={adBudget} onChange={handleAdBudgetChange} />
                    </label>
                    </div>

                </div>

                <div className="promotion">

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="10%" onChange={handleChange} checked={selectedValue === '10%'} />
                        10%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="15%" onChange={handleChange} checked={selectedValue === '15%'} />
                        15%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="20%" onChange={handleChange} checked={selectedValue === '20%'} />
                        20%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="25%" onChange={handleChange} checked={selectedValue === '25%'} />
                        25%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="30%" onChange={handleChange} checked={selectedValue === '30%'} />
                        30%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="40%" onChange={handleChange} checked={selectedValue === '40%'} />
                        40%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="50%" onChange={handleChange} checked={selectedValue === '50%'} />
                        50%
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="50%" onChange={handleChange} checked={selectedValue === '50%'} />
                        buy 1+1 free
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="33%" onChange={handleChange} checked={selectedValue === '33%'} />
                        buy 2+1 free
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="50%" onChange={handleChange} checked={selectedValue === '50%'} />
                        buy 2+2 free
                    </label>
                    </div>

                    <div className='radio-option'>
                    <label>
                        <input type="radio" name="value" value="25%" onChange={handleChange} checked={selectedValue === '25%'} />
                        buy 1 get 50% on 2nd
                    </label>
                    </div>

                </div> 

                <div>
                  <button type="submit">Calculate</button>
                </div>
              </form>
              <div className='results'>
                <p>Revenue lost to price drop: {value - adBudget} </p>
                <p>Promotion budget: {adBudget}</p>
                <p>Total promotion cost: {value}</p>
              </div>
            </div>
          )
        }
        
export default Calculator