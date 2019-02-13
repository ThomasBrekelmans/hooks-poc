import styled from '@emotion/styled';

const FormsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	> * + * {
		margin-left: 10px;
	}
`;

export default FormsContainer;
