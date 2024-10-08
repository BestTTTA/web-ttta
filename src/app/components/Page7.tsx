import { FC } from "react";
import Image from 'next/image';

const entrepreneurIcon = "/images/entrepreneur.png";
const educationIcon = "/images/mortarboard.png";
const secureIcon = "/images/secure.png";
const givingIcon = "/images/love.png";

const Page7: FC = () => {
  return (
    <div style={styles.container}>
      {/* Section with title and description */}
      <div style={styles.header}>
        <div style={styles.topIcon}></div> {/* Orange icon above */}
        <h1 style={styles.title}>WHAT DO WE OFFER FOR YOU?</h1>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Section with services */}
      <div style={styles.services}>
        {/* Service 1 */}
        <div style={styles.service}>
          <Image src={entrepreneurIcon} alt="entrepreneur Icon" width={40} height={40} style={styles.serviceIcon} /> {/* ใช้ next/image */}
          <h3 style={styles.serviceTitle}>Entrepreneur</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 2 */}
        <div style={styles.service}>
          <Image src={educationIcon} alt="education Icon" width={40} height={40} style={styles.serviceIcon} />
          <h3 style={styles.serviceTitle}>Education</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 3 */}
        <div style={styles.service}>
          <Image src={secureIcon} alt="secure Icon" width={40} height={40} style={styles.serviceIcon} />
          <h3 style={styles.serviceTitle}>Secure</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Service 4 */}
        <div style={styles.service}>
          <Image src={givingIcon} alt="endless giving Icon" width={40} height={40} style={styles.serviceIcon} />
          <h3 style={styles.serviceTitle}>Endless Giving</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    textAlign: "center" as const,
    padding: "50px",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    marginBottom: "50px",
  },
  topIcon: {
    width: "20px",
    height: "20px",
    backgroundColor: "orange",
    margin: "0 auto",
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold" as const,
  },
  description: {
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: "16px",
    color: "#555",
  },
  services: {
    display: "flex" as const,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "30px",
  },
  service: {
    textAlign: "center" as const,
    maxWidth: "200px",
  },
  serviceIcon: {
    marginBottom: "15px",
  },
  serviceTitle: {
    fontSize: "20px",
    fontWeight: "bold" as const,
  },
};

export default Page7;
