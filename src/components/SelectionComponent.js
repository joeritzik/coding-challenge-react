import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SelectionComponentStyle.css';
import uuid from 'react-uuid';

const SelectionComponent = ({data, setFilterVal, setFiltered, setSortVal, filterVal, sortVal, filtered} ) => {

  const filters = ['All','Teal', 'Indigo', 'Purple', 'Maroon', 'Orange', 'Khaki', 'Puce', 'Aquamarine', 'Yellow', 'Pink', 'Red', 'Fuscia', 'Mauv', 'Green', 'Crimson', 'Turquoise', 'Blue', 'Goldenrod']
  const sorts = ['Id', 'First Name', 'Last Name', 'Email', 'Job Title']

  const handleSectionChange = (e) => {
    setFilterVal(e.target.value)
    if (e.target.value === 'All') {
      setFiltered(data);
    } else {
      setFiltered(data.filter(el => el.section === e.target.value))
    }
  }

  const handleSortChange = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setSortVal(e.target.value)
    switch (e.target.value) {
      case 'Id':
        filtered.sort((a,b) => a.id - b.id)
        break;
      case 'First Name':
        filtered.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
        break;
      case 'Last Name':
        filtered.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
        break;
      case 'Email':
        filtered.sort((a, b) => (a.email > b.email) ? 1 : -1)
        break;
      case 'Job Title':
        filtered.sort((a, b) => (a.job_title > b.job_title) ? 1 : -1)
        break;
      default:
        break;
    }
  }

  return (
    <div className={'formBar'}>
      <FormControl style={{minWidth: 250, margin: 20}}>
      <InputLabel id="sectionSelectLabel">Filter Section:</InputLabel>
      <Select
        labelId="sectionSelectLabel"
        id="sectionSelect"
        value={filterVal}
        onChange={handleSectionChange}
      >
        {filters.map((val) => {
          return (
              <MenuItem value={val} key={uuid()}>{val}</MenuItem>
          ) 
        })}
      </Select>
    </FormControl>

    <FormControl style={{minWidth: 250, margin: 20}}>
      <InputLabel id="sortSelectLabel">Sort By:</InputLabel>
      <Select
        labelId="sortSelectLabel"
        id="sortSelect"
        value={sortVal}
        onChange={handleSortChange}
      >
        {sorts.map((val) => {
          return (
            <MenuItem value={val} key={uuid()}>{val}</MenuItem>
          ) 
        })}
      </Select>
    </FormControl>
  </div>
  )
}

export default SelectionComponent;