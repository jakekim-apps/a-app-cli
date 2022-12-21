import {ListSubheader, MenuItem, Select} from "@mui/material";

const SelectorByGroup = (props: any) => {

    const renderSelectGroup = (dataSet: any) => {
        const items = dataSet.data.map((d: any, i: any) => {
            return (
                <MenuItem key={i} value={d._id}>
                    { d.name }
                </MenuItem>
            )
        })
        return [<ListSubheader>{dataSet.name}</ListSubheader>, items];
    }

    return (
        <Select
            value={props.value}
            onChange={props.handleChange}
        >
            { props.data.map((d: any) => renderSelectGroup(d))}
        </Select>
    )
}

export default SelectorByGroup
