import React from "react";

const teamMembers = [
    {
        name: "Babar",
        title: "Managing Partner/Director",
        description: "Naeem, the founder of Ford Rhodes Accountants, established in 2014, has over 15 years of impressive professional experience in the fields of accounting and finance.",
        image: "/team/42CCED59-F3D2-4330-8AD4-4F1D96866B9C_1_201_a.jpeg",
    },
    {
        name: "Aneela Spall",
        title: "Practice Manager",
        description: "Annual account & Tax Return with 10+ years experience",
        image: "https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980281/pexels-emmy-e-1252107-2381069_qxqqkd.jpg",
    },
    {
        name: "Zia Ur Rehman",
        title: "Senior Manager (MSC Accounting & Finance)",
        description: "Vat Return, Payroll & CiS Return with 10+ years experience",
        image: "/team/CD4A12E5-A02F-45C2-8FE8-8FAA2929D3CC_1_201_a.jpeg",
    },
    {
        name: "Raza Ul Haq",
        title: "Manager",
        description: "ACCA  5 Year Experience",
        image: "/team/C101DB8A-206D-4423-AF62-888AFBD09603_1_201_a.jpeg",
    },
    {
        name: "Muhammad Nouman",
        title: "Accountant",
        description: "ACCA Finalist",
        image: "/team/0FC49339-FC96-4868-9E53-84A0DBDF2A32_1_201_a.jpeg",
    },
    {
        name: "Muhammad Iqbal",
        title: "Accountant",
        description: "ACCA Finalist",
        image: "/team/CAC0ED78-BCCE-4ABF-B49A-D0A15C9BF2E9_1_201_a.jpeg",
    },
];


const TeamCard = ({ member }) => {
    return (
        <div
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                borderRadius: "16px",
                overflow: "hidden",
                width: "320px",
                height: "420px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <img
                src={member.image}
                alt={member.name}
                style={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    padding: "20px",
                    textAlign: "center",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                {/* Consistent block for name + title */}
                <div style={{ minHeight: "60px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>{member.name}</h3>
                    <p style={{ fontSize: "14px", fontWeight: "600", margin: 0, marginTop: "6px" }}>{member.title}</p>
                </div>

                {/* Description below with spacing */}
                <p style={{ fontSize: "14px", marginTop: "16px" }}>{member.description}</p>
            </div>
        </div>
    );
};

const TeamSection = () => {
    return (
        <section
            style={{
                backgroundColor: "rgb(26, 28, 100)",
                paddingTop: "80px",
                paddingBottom: "80px",
                paddingLeft: "60px",
                paddingRight: "60px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    maxWidth: "1300px",
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // Exactly 3 cards per row
                    gap: "40px",
                    justifyContent: "center",
                }}
            >
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                        <TeamCard member={member} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
