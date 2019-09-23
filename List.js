import React, {Component} from 'react';
import '../App.css';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import {GetDistrictsList,GetBlocksList,GetpanchayatList,GetVillagesList} from '../webservice/Districtservice';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default class List extends Component{
  constructor (props){
      super(props);
      this.state = {
        districtSelect: {},

      }

      GetDistrictsList().then((result) => {
        const districtList = result;
        let districtOptions = districtList.map(function(row,index){
            return {'value': row.district_id, 'label': row.district_name}
            });
        this.setState({districtOptions: districtOptions});
      });
    }
    updateBlocksList = (selectedOption) => {
    const districtId = selectedOption.value
    this.setState({districtId: districtId})
    console.log('districtId = '+districtId)
    GetBlocksList(districtId).then((result) => {
      const blocksList = result;
      console.log(blocksList);
      let blockOptions = blocksList.map(function(row,index){
        return {'value': row.block_id, 'label': row.block_name}
      });
      this.setState({blockOptions: blockOptions});
    });
  }
  updatePyanchatList = (selectedOption) => {
    const blockId = selectedOption.value
    this.setState({blockId: blockId})
    console.log('blockId = '+blockId)
    GetpanchayatList(this.state.districtId,blockId).then((result) => {
      const panchayatList = result;
      console.log(panchayatList);
      let panchayatOptions = panchayatList.map(function(row,index){
        return {'value': row.panchayat_id, 'label': row.panchayat_name}
      });
      this.setState({panchayatOptions: panchayatOptions});
    });
  }
  updateVillagesList = (selectedOption) => {
    const panchayatId = selectedOption.value
    GetVillagesList(this.state.districtId,this.state.blockId,panchayatId).then((result) => {
      const villagesList = result;
      console.log(villagesList);
      let villageOptions = villagesList.map(function(row,index){
        return {'value': row.village_id, 'label': row.village_name}
      });
      this.setState({villageOptions: villageOptions});
    });
  }

  render(){
    let districtSelect = <Select options={this.state.districtOptions} formatGroupLabel={formatGroupLabel}
    onChange={this.updateBlocksList}/>

    return(
      <form>
      <div id="box1">
      <p>District</p>

              {districtSelect}

    </div>
      <div id="box2">
      <p>Block</p>
      <Select

 options={this.state.blockOptions}
 onChange={this.updatePyanchatList}
 formatGroupLabel={formatGroupLabel}

      /></div>
      <div id="box3">
      <p>Panchayat</p>
      <Select
      options={this.state.panchayatOptions}
    onChange={this.updateVillagesList}


        formatGroupLabel={formatGroupLabel}
      /></div>
      <div id="box4">
      <p>Village</p>
      <Select

     options={this.state.villageOptions}

        formatGroupLabel={formatGroupLabel}
      /></div>
      <Button variant="contained" color="primary" id="butt">
            submit
          </Button>
      </form>
    );
  }
}
