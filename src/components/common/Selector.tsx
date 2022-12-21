import {MenuItem, Select} from "@mui/material";

const Selector = (props: any) => {
    return (
        <Select
            value={props._id}
            onChange={props.handleChange}
        >
            {
                props.data.map((d: any, i: any) => {
                    return (
                        <MenuItem key={i} value={d._id}> {d.name} </MenuItem>
                    )
                })
            }
        </Select>
    )
}

export default Selector
