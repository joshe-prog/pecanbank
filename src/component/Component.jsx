import React from 'react'


function Component1({imgcompo,hcompo,pcompo}) {
  return (
 <Container>
  <Row>
    <Col>
    <img src={imgcompo} alt="" />
    </Col>
    <Col>
    <h1>{hcompo}</h1>
    <p>{pcompo}</p>
    </Col>
  </Row>
  
 </Container>
  )
}

export default Component1
