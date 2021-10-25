import React from 'react';

const FourUserData = (props) => {
    console.log(props)
    const{calorieCount,carbohydrateCount,lipidCount,proteinCount} = props.userData
    
    return (
        <div className='four-data'>
            <ul>
                <li>{(calorieCount/1000).toFixed(3)}kCal</li>
                <li>{proteinCount}g</li>
                <li>{carbohydrateCount}g</li>
                <li>{lipidCount}g</li>
            </ul>
        </div>
    );
};

export default FourUserData;