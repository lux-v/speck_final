import React from 'react'
import {
    LecturesWrapper,
    Title,
    DescriptionWrapper,
    Description
} from "./LectureStyle"

const Lecture = ({
    title,
    children,
    isNavlakusa,
}) => {
    return (

        <LecturesWrapper isNavlakusa={isNavlakusa}>
            <Title>
                {title}
            </Title>

            <DescriptionWrapper>
                <Description>{children}</Description>
            </DescriptionWrapper>
        </LecturesWrapper>
    )
}

export default Lecture