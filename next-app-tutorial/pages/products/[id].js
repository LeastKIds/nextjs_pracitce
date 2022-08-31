import {useRouter} from "next/router";

const Product = () => {

    const router = useRouter()
    const { id } = router.query

    return(
        <div>
            任意のID
        </div>
    )
}
export default Product