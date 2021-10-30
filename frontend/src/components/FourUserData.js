import React from 'react';
import iconCalo from '../assets/calories-icon.png';
import iconProt from '../assets/protein-icon.png';
import iconGlu from '../assets/carbs-icon.png';
import iconLip from '../assets/fat-icon.png';
import PropTypes from 'prop-types';


/**
 * display calorie carbohydrate lipid and protein of the user
 * @param {Object} props - calorie carbohydrate lipid and protein info
 * @return {HTMLElement} - component contains user info
 */
const FourUserData = props => {
  console.log (props);
  const {
    calorieCount,
    carbohydrateCount,
    lipidCount,
    proteinCount,
  } = props.userData;

  return (
    <div className="four-data">
      <div className="liste">
        <img src={iconCalo} alt="calorie icon" />
        <div className="info-icon">
          <h2>{calorieCount} kCal</h2>
          <p>Calories</p>
        </div>
      </div>

      <div className="liste">
        <img src={iconProt} alt="proteine icon" />
        <div className="info-icon">
          <h2>{proteinCount} g</h2>
          <p>Proteines</p>
        </div>
      </div>

      <div className="liste">
        <img src={iconGlu} alt="glucide icon" />
        <div className="info-icon">
          <h2>{carbohydrateCount} g</h2>
          <p>Glucides</p>
        </div>
      </div>

      <div className="liste">
        <img src={iconLip} alt="lipide icon" />
        <div className="info-icon">
          <h2>{lipidCount} g</h2>
          <p>Lipides</p>
        </div>
      </div>

    </div>
  );
};


FourUserData.propTypes = {
  userData: PropTypes.object
};
export default FourUserData;
