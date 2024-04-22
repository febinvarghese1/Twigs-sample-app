import React, { useState } from "react";
import { Box, Flex, IconButton, Avatar, AvatarGroup, Text, Heading, Button, Popover, PopoverTrigger, PopoverContent, Calendar, toast } from "@sparrowengg/twigs-react";
import { CalendarIcon, ChevronLeftIcon } from "@sparrowengg/twigs-react-icons";

const TicketCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      css={{
        height: "100vh",
        background:
          "linear-gradient(115deg, $purple100 15.07%, $pink100 104.4%)"
      }}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        css={{
          background: `url(${'https://cdn.pixabay.com/photo/2023/09/02/18/26/ai-generated-8229399_1280.png'}) no-repeat right center`,
          height: 600,
          width: 320,
          objectFit: "cover",
          borderRadius: "$2xl",
          boxShadow: "0px 2px 10px rgba(0,0,0,1)"
        }}
      >
        <Flex justifyContent="space-between" css={{ padding: "$5" }}>
          <IconButton
            variant="ghost"
            icon={<ChevronLeftIcon size={48} color="#fff" />}
            size="xl"
          />
          <Popover>
            <PopoverTrigger asChild>
              <IconButton
              icon={<CalendarIcon />}
              size="lg"
              css={{ borderRadius: "$pill" }}
              color="bright"
            />
            </PopoverTrigger>
            <PopoverContent close css={{ width: 300, position: "relative", top: "$5", right: "$30" }}>
              <Calendar onChange={setCurrentDate} />
            </PopoverContent>
          </Popover>
        </Flex>
        <Box css={{ paddingInline: "$4", paddingTop: "$40" }}>
          <Heading
            size="h6"
            weight="bold"
            css={{ color: "$white900", textAlign: "center" }}
          >
            Doctor Strange
          </Heading>
          <Text
            size="md"
            weight="medium"
            css={{ color: "$white900", textAlign: "center" }}
          >
            in the Multiverse of Madness
          </Text>
          <Text
            size="md"
            weight="medium"
            css={{ color: "$white800", textAlign: "center", marginTop: "$14" }}
          >
            Dr. Stephen Strange casts a forbidden spell that opens the
            doorway... read more
          </Text>
        </Box>
        <Box
          css={{
            height: 230,
            background:
              "linear-gradient(180deg, rgba(19, 11, 43, 0.00) 0%, #130B2B 40.83%)",
            borderRadius: "0 0 $2xl $2xl",
            paddingInline: "$10",
            paddingTop: "$30"
          }}
        >
          <Flex justifyContent="space-between" css={{ marginTop:"$12" }}>
            <Box  css={{ marginBottom: "$3"}}>
            <Text
              css={{  color: "$white900" }}
              size="md"
              weight="medium"
            >
              Reviewers:
            </Text>
            <AvatarGroup size="sm" limit={4}>
              {[
                "https://randomuser.me/api/portraits/women/78.jpg",
                "https://randomuser.me/api/portraits/women/1.jpg",
                "https://randomuser.me/api/portraits/men/3.jpg",
                "https://randomuser.me/api/portraits/men/5.jpg",
                "https://randomuser.me/api/portraits/men/4.jpg"
              ].map((src, index) => (
                <Avatar key={index} src={src} />
              ))}
            </AvatarGroup>
            </Box>
            <Box css={{ marginBottom:  "$2"}}>
            <Text
              css={{ color: "$white900" }}
              size="md"
              weight="medium"
            >
              { `Date: ${currentDate}` }
            </Text>
            <Text
              css={{ color: "$white900" }}
              size="md"
              weight="medium"
            >
              Price: 500
            </Text>
            </Box>
          </Flex>
          <Button
            size="lg"
            css={{
              width: "100%",
              marginTop: "$16",
              background: "$pink100",
              textTransform: "uppercase"
            }}
            onClick={()=> toast({
              variant: 'success',
              description: 'Ticket Booked Successfully'
            })}
          >
            Book Now
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
export default TicketCard;