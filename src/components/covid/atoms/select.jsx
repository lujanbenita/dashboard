
const Select = ({dataCovid, handleOnChange}) => (
  <div className="select-atom">
    <select name="select" onChange={handleOnChange}>
      {dataCovid.regions.map(item => <option value={item.name} key={item.name} > {item.name} </option> )}
    </select>
  </div>
);

export default Select;