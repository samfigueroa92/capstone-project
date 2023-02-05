import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import SidebarNav from "./SidebarNav";
import Rate from './Rate'
import Reviews from "./Reviews";
import "./ReviewsPage.css";


const ReviewsPage = ({ date, setDate, applicationUser, setRequestSearch, requestSearch }) => {
 
  const [rating, setRating] = useState(0)
  //placeholder
  const [reviews, setReviews] = useState({})
  let navigate = useNavigate();
 
  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav
          date={date}
          setDate={setDate}
          applicationUser={applicationUser}
          setRequestSearch = {setRequestSearch}
          requestSearch = {requestSearch}
        />
      </div>
      <div className="main-page ReviewPage">
        <div className= 'ReviewPage__personalInfo'>
        <img  className='ReviewPage__img'src={applicationUser.profilephoto || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAgwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABAMGAQIFB//EAEEQAAIBAgMEBwYEAwUJAAAAAAECAwAEBREhBhITMUFRUmFxkaEHFCIyM4EjQmLBsdHwFUNzguIkJTRTY3KywuH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAeEQEBAAICAwEBAAAAAAAAAAAAAQIRMUESIlEhMv/aAAwDAQACEQMRAD8A9ip1Ppr4CjcTsr5UmzHM5E5Z9BoMy/Ubxpi3+mPE0RKpjUlQTl0ioZjuyEAkDqBoM3P1B4Vta/mrMADKSwBOeWutLYnd2uHwme6uIbaEDV5HCDzNAzdclrS2+p9qqDe0LC3kaLCbXEMZlB3crO2JXPxbLTvok2i2tnyNnsWyJ2p71Iz5VvwyTa6XH0T9qXi+ovjVRGObaowLbIQyjpVMSjP71s+3E9npjWy2LWK9M0cQljXxYZU8Mja7v8h8KR6K5mCbTYPjhX+zMRimb/lMSsg/ytkasG6nZXyrFll1VbdFJN87eJo3m7R86aRVKKSozy6qAh+mvhUE/wBU1iQkOwBIAPQamgAaMFgCe+gWop3cTsr5UUCnEftmmFjQoCVGZFHATqPnUBldSQDoNOVAOzKxVWIA5CpY1Vk3nAJ11NCRK6hmzJPfVBxG9uttsRnwfB55LfAbZ9y+vYz8Vw3TGh6uv10yDaxx2mzWI7W3eI30mF7FW63c0ek185ytoDr0/mP9a61JhmwdncXAvtprqbG74HPO4Y8JD1KnLLx07hVlwbC7LDrFLSyt0hgi0VE0z7z1nrJ1NMyfhECPTP71blr+TX1rwIrSJI7WNIYxoEjUKB9hXFvdqcMs3KSSvcsvNIBvDPxzy9a4O120Et1M+H2shEEZKysum+3SPAevhVWrCr/FtphbnJoLmA56OVBA8jnXds7uK8RJbedZYmPNT6V5HTmFYlc4VdC4tW/70PyuOo/1pQX7HtjsCxnOS6sUS4Gq3EH4cgPXmOf3zqvNPtNserNNJNj2CoNWH/FQL1ntD+tKuGH4gmIWkVxCxMcvQQM16we8U9wE6M8/GtTO8VNEcFxPDccsEvcNmSeBtCRoVPUR0HuqdnYMQGIANUvGsDu8EvZNodlECzfNeYeukd0vMkAcm5nl4a5g2jZ7FbDaDCocQsWLJJ8yscmRulSOv/5S49zgdKJFZAzDMnpqKVijlUOQ6hQzsjFVOQBqSNBKu8+ZNZVDxH7Z86KY4EfUfOigi94fqXyrcQqyhiWzOulY93/V6Vo9yIY2L5BIwSzHoA5mgqe3OI3c0ttsthD7l5iOfFlGf4FuPmY9ROo8+kirHgmD2mF4XBY2SGOCFd1QMsz1k95Opqsez+3fF5sT2qusxLiMzR22Y1S3Q5Afcj77udXLiGH4AAcumt5fnqk+hmMB3Uyy561BfTFLC5uGIBhiZgR3An9qnC8f4yciNK5O1rNbbPXoXXfRVJ8WA/esK8yBJGvOijpNFAUUUUF39nsm/aXsLN9OQOo8R/pq1e8P1L5VRdgJSuKXMQ+WS3zP2YD9zV992/V6UG3u6jUFqoOJqditplxi2G7g+Jy8K/jA+GGX8svcD0/frFXv3k5fKKTxfCIcZwu5sbnWK5jKnMfKTqCO8HI/atY3XKU6saygOW1OvwnStS5hYouWQ66rHs8xW4mwE2F9rfYXK1nPnnn8Ginyy17jVoEfG+MnLPuqWauln6x7xJ+nyorb3b9XpRUGfeR2TVW9pFzJY7HX7wnOW4CwIB08Rgp9Cas3u79O751T/aS/Fj2cs/yzYzArjrAzJrWE3lEvCzYLbx4ThFnh8a/DbQrHn1kDU+dN8MzfGDlnWDE0hLrlkes1ukgiG4wOY6qyrCtwPhIzz1zFJ4xaHFcMubdcgzxkLn2uY9QKbZTO2+nLlrQp4GYfp6qDx50eN2SRSrqxDKeYI5itas+3OH8LEBfwoeDPo5y5OB+4H8arFAUUVNZ2st7dR20CkySHId3WT3Cgt2wOHShLjEHG6jDhx5/mAOZ9QB9jVwNyOzUVmkVrZxWkKkJGgRdOrSt/d3/T50Gfd2y+YeVZE+6N0ry0rb3hMuTelR8F2+IZZHXnQU2yU2HtOvoFG7Di1ityP8RDun03jV0WTg/ARn31TdpCbf2g7IzDMF/eYXPWNzMetXBkaVt9Msj11vPqpG/vI7JorT3eT9PnRWFS8ePtelUn2jBom2buSPgjxuAk9ABzH8qt3DfsGq37Tbd7nYu7aAj3i0MdwmY5bjAn03q1hfaJeFrSVEUKx1HPSo3RpGLIMwaUw+5GI2FvfQjejuIllU+IBp+J1RN1jkeo1lWsTCIFZNDnn11iX8Ujh6gc+isTAyOGQbwy5ilJsWsMO3heXUUbdnPNvIa0E1xBC9tNFfIGgdDvhtRlXkZIJO7nu9GfVVu2h2vivbWS0sIpArjdaZ9NOnIeGnRzqoUBV52Bjtjh9zIqD3oybjMee7kCB3CqNXW2exp8Gumk4fFikADpvZcuRHr50HpYicEEroOetTceLtelcaz2qwm9Td944EhHyTjd9eXrT6gugZcmUjmuooN+DJ2fWplljVQrHUDI6VtxU7YpcoxYkKciaCobUZze0DZGFBn8V1Ke4BBz+9XSN1jXdkORFUy2b+0PalK4I4OE4cI2P/VkOf8A4k1b5FLuSoJHdW8uJEibjxdr0opfhv2TRWFN769oedIXEC3EUsM0ZaKVWR1I5qdCPKs86eT6a+FBS/ZrdvaWt9s1eP8A7VhE5RSx+eFjmjeGv8Kd2m2jjwycwQxia4IzIJ+FB39/dXL22gmwjFbfa3D4+I1qOFiEI/vbc9Piv8uqq1id7HiOI3F5A4eKaQmNh0ryHoK3lN+yT4YvcdxO9zE13IqH+7jO4vpz++dc3IUUVhRRRRQFFFFAUxaXt1ZNvWdxLCepHIB8RyNL0UFpwzbCdGVMSRZY88jKgyZe/LkfSrrd4lbWGFS4hPIvu8MPFLA81Az08a8hrq8eTaoYbszb5izgAlxSUH8isdyMd5yH9A1rGbqW6d72d2lwcJuMZvEYXeMXDXTdO6hJ3B4Zajxq5wELHkxyPfWbZVSBERQqKoCqBoB0CoJ8uKamV3dk/DW+vaHnRSOdZqKeNJN8zeJo3m7TedNIilFJUZ5c8qDVEV4N11DKykEEaEV5DtTgEuyN689qjyYHM+YyGZtGPQf09R+3P5vWJCQ7AEgZ9BrcQxXFu0c8aSI4KurqCGHUeutY5aSx42rK6h0IZW1BHI1mu1tBsJd4VPJc7L/jWx+J8PkbVf8ADY/wOvjyqtQ4hC8xt5g9vcqcmhnXcYH71bh3Df03RR40VhRRRRQFFRXN1Bapv3Eqxr3n9qmwnCcZ2jYe4wtY2B+a9nXIsP0LzPjy7xWpjaluixN1fXqYXhEfGvpeZHywr0sx6Mv66AfWNktnrbZ3CUtYCZJXPEnnYfFK55k93QO7zrbZvZrDtnbL3exjJZ9ZZpNXlPWT+w0FOsx3j8R5nppcprU4JBL9RvGmLf6Y+9ESqyAsATl0ioZs1kIUkDqGlZU3RSO83abzooGuEnZpcuwJAYgDTQ1njSdfpUohRlBIOuvOgI41ZAzDMmopGZHKqSB1ChpGQlVOg5VJHGJF3n50GIVEikvqQcs65mP4DhWLoseJWMM+Q0dhk6+DDUeddFyYW3UOQyzraMcbMvrlSXQ8/n9mqgk4LjN1agcopwJUHcOR/jXOuNiNrIPpXWEXC583Z4z5BcvWvUJRwcjHoTzrCEytuvqOdb872mnlabHbYSMB/uZM+kzyH/1roQ+znFpQTiWPJEmWqWcOv2Y5fwr0eSNY1Lp8wqNZGchWOhORp53o0rGD7D4Dhkyze6m7ucx+NdtxDn1gH4R5VbjEnZrVoUUFgDmNedQ8aTr9KzbbyaY4j9o+dMJGjKCVGZGZo4CZcj51CZXUlQdAchpUUOzKxCkgA6CpIkV13mGZPSaEiV1DNzOprR2aJyiHIUE3BTs0VBxpO16UUEdOp9NfAUUUCkv1G8aYt/pDxNFFBFc/V/y/zra1/NWaKAuuS1pbfV+1FFBLcfRP2peL6i+NFFA3J8jeBpE8jWaKB/opF/nbxNFFA1D9NfCoJ/qt9qxRQaUUUUH/2Q=='} />
        <br/>
        <h4 className= 'ReviewPage__stars'>Star Rating:</h4>
        <Rate rating={rating} OnRating={rate=> setRating(rate)} />
        <h4>Review Count: </h4>
        <p>{reviews.length || 'Review Count'}</p>
        </div>
        <div className='ReviewPage__reviews-list'>
          <Reviews reviews= {reviews}/>
        </div>


        
      </div>
    </div>
  );
};

export default ReviewsPage;
