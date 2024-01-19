import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"


interface SelectComponentProps {
    data:any[]
    placeholder:string
    disabled:boolean
    handle?:(e:string)=>void
    value?:string
}


const SelectComponent = ({data, placeholder, disabled, handle, value}:SelectComponentProps) => {
    return (
        <Select onValueChange={handle}>
            <SelectTrigger className="w-full text-white">
                <SelectValue placeholder={value == "" || value == undefined || value == null ? placeholder: value} className="text-white" />
            </SelectTrigger>
            <SelectContent aria-disabled>
                {
                    data.map((item)=>(
                        <SelectItem key={item.codigo} value={`${item.nome}+${item.codigo}`} disabled={disabled}>{item.nome}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
}

export default SelectComponent;