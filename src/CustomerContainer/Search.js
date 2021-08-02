import React from 'react';

const Search = (props) => {
    const {searchInput, handleSearch} = props
    return ( 
            <input
                style={{color:'#173f5f', fontFamily:'"Roboto", "Helvetica", "Arial"', backgroundColor:'#fafafa'}}
                type='text'
                placeholder='enter a name or a phone number'
                value={searchInput} onChange={handleSearch}
                style={{float:'left !important', marginBottom:'20px', backgroundColor:'#fafafa', borderRadius:'3px', height:'25px', borderColor:'#0000008a'}}
            />
     );
}
 
export default Search;