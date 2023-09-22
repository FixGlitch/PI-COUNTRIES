import CountryDetail from "../../components/CountryDetail/CountryDetail";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getCountryById } from "../../redux/actions/getCountryById";
import { useParams } from "react-router-dom";

export default function Detail () {

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getCountryById(id))
    },[dispatch, id]);

    return(
        <div >
            <CountryDetail/>
        </div>
    )
};