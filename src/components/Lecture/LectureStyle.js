import styled from "styled-components"
import { colors } from "../../lib/style/theme"

export const LecturesWrapper = styled.div`
    background-color: ${colors.bgPrimary};
    border: 1px solid ${colors.border};

    border-radius: 16px;
    padding: 24px;
    width: 100%;
   

    ${(props) =>
        props.isNavlakusa
        && `
      background-color: ${colors.bgSecondary};
  
  `}
`

export const Title = styled.p`
    text-align: center;
    font-size: 24px;

`
export const DescriptionWrapper = styled.div`
 
    
`
export const Description = styled.p`
    
`