
import React from 'react'
import CustomSelect from './CustomSelect';

const styles = {

    
  app: {
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyItems: "left",
    alignItems: "flex-start",
    display: "grid",
    // height: "100vh",
    fontFamily: "Arial",
    color: "rgba(0,0,100,1)",
    gridTemplateColumns: "1fr",
    fontSize: 16,

  },
  select: {
    width: "100%",
    maxWidth: 400,
    },
  
  
};


const options = [
  { label: "Restaurant", value: "Restaurant" },
  { label: "Cottage", value: "Cottage" },
  { label: "Castle", value: "Castle" },
  { label: "fantasy city", value: "fantasy city" },
  { label: "beach", value: "beach" },
  { label: "gardens", value: "gardens" },
  { label: "off-grids", value: "off-grids" },
  { label: "farm", value: "farm" },
];

function onChangeInput(value) {
  console.log(value);
}

export const Dropdown = () => {
  return (
    <div style={styles.app}>
      <CustomSelect
        isMulti={false}
        style={styles.select}
        defaultValue={[options[1]]}
        onChange={onChangeInput}
        options={options}
        label=""
      />
    </div>
  );
}

