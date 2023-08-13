import { Sparklines, SparklinesLine } from "react-sparklines";

export default function Sales() {
    return(
        <Sparklines data={[5, 10, 25,5, 20, 8,5,14,50,2]} limit={10} width={100} height={50} margin={5} marginBottom={0}>
            <SparklinesLine color="blue" />
        </Sparklines>
    )
}

