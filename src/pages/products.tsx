import { Suspense } from "react";
import Container from "../components/Container";

export default function Products (){
  return(
    <Suspense fallback={null}>
      <Container>
        <div className='mt-8'>
          this product page with hight light heading 
        </div>
      </Container>
    </Suspense>
  )
}