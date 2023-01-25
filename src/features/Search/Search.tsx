import React, {useState, FC} from 'react'

const SearchBar: FC = () => {
     // State to store value from the input field
     const [inputValue, setInputValue] = useState("");

     // Input Field handler
     const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value);
     };
 
     // Reset Input Field handler
     const resetInputField = () => {
         setInputValue("");
     };
 
     return (
         <div style={{ display: "flex", marginLeft: "40px", alignItems: "center", 
         border: "1.5px solid grey", justifyContent: "space-between", 
         paddingLeft: "0.7rem", paddingRight: "0.7rem", borderRadius: "25px", height: "2.5rem", width: "30rem"}}>
              <div style={{display: "flex", alignItems: "center"}}>
              <img width="15px" height="15px" border-radius = "50%" src={require('./search.png') } alt="search placeholder" />
                  <input style={{borderStyle: "none", marginLeft: "5px", outline: "none", fontSize: "1rem"}}
                  type="text" 
                  value={inputValue} 
                  onChange={handleUserInput} 
                  placeholder="Search"
                  />
              </div>
              <button style={{borderStyle: "none", backgroundColor: "white", fontSize: "1rem"}} onClick={resetInputField}>x</button>
         </div>
       );
}

export default SearchBar;