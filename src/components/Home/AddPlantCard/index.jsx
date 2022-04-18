import React from "react";
import {
  Add_Wrapper,
  Category,
  Category_Icon_Wrapper,
  Category_Input,
  Category_Word,
  Category_Wrapper,
  Description_Wrapper,
  Desc_Input,
  Desc_Input_Wrapper,
  Desc_Word,
  Featured,
  Featured_Wrapper,
  Flex_Wrapper,
  Icon_Wrapper,
  Input_Name,
  Input_Type,
  Input_Wrapper,
  Name_Input_Wrapper,
  Name_Plant,
  Naming,
  Plant,
  RedIcon,
  Short_Input,
  Short_Input_Wrapper,
  Short_Word,
  Short_Wrapper,
  Tags,
  Tags_Icon_Wrapper,
  Tags_Input,
  Tags_Word,
  Type_Flex_Wrapper,
  Type_Plant,
  Type_Wrapper,
  Typing,
} from "./style";
import redstar from "../../../assets/icons/redstar.png";
export const AddPlantCard = () => {
  return (
    <Add_Wrapper>
      <Type_Wrapper>
        <Plant>Add plant</Plant>
        <Input_Wrapper>
          <Flex_Wrapper>
            <Name_Input_Wrapper>
              <Name_Plant>Name of plant</Name_Plant>
              <RedIcon src={redstar} />
            </Name_Input_Wrapper>
            <Input_Name type="text" />
          </Flex_Wrapper>
          <Typing>
            <Type_Flex_Wrapper>
              <Icon_Wrapper>
                <Type_Plant>Type</Type_Plant>
                <RedIcon src={redstar} />
              </Icon_Wrapper>
              <Input_Type type="text" />
            </Type_Flex_Wrapper>
          </Typing>
        </Input_Wrapper>
        <Category_Wrapper>
          <Category>
            <Category_Icon_Wrapper>
              <Category_Word>Category</Category_Word>
              <RedIcon src={redstar} />
            </Category_Icon_Wrapper>
            <Category_Input type="text" />
          </Category>
          <Tags>
            <Tags_Icon_Wrapper>
              <Tags_Word>Tags</Tags_Word>
              <RedIcon src={redstar} />
            </Tags_Icon_Wrapper>
            <Tags_Input type="text" />
          </Tags>
        </Category_Wrapper>
        <Short_Wrapper>
          <Short_Input_Wrapper>
            <Short_Word>Short Description</Short_Word>
            <RedIcon src={redstar} />
          </Short_Input_Wrapper>
          <Short_Input type="text" />
        </Short_Wrapper>
        <Description_Wrapper>
          <Desc_Input_Wrapper>
            <Desc_Word>Description</Desc_Word>
            <RedIcon src={redstar} />
          </Desc_Input_Wrapper>
          <Desc_Input type="text" />
        </Description_Wrapper>
        <Featured_Wrapper>
          <Featured>Featured Image</Featured>
          <RedIcon src={redstar} />
        </Featured_Wrapper>
      </Type_Wrapper>
    </Add_Wrapper>
  );
};
export default AddPlantCard;
