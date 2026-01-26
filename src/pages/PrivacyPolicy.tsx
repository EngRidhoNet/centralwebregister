import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div
            style={{
                margin: 0,
                fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                background: "#f3f4f6",
                color: "#0f172a",
                lineHeight: 1.6,
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    maxWidth: "960px",
                    margin: "2.5rem auto",
                    padding: "0 1rem",
                }}
            >
                <article
                    style={{
                        background: "#ffffff",
                        borderRadius: "14px",
                        boxShadow:
                            "0 14px 35px rgba(15, 118, 110, 0.10), 0 4px 12px rgba(15, 23, 42, 0.05)",
                        overflow: "hidden",
                        border: "1px solid rgba(15, 118, 110, 0.06)",
                    }}
                >
                    {/* Header */}
                    <header
                        style={{
                            padding: "1.75rem 1.75rem 1.25rem",
                            background:
                                "radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 48%), linear-gradient(135deg, #0f766e, #0891b2)",
                            color: "#f9fafb",
                        }}
                    >
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "999px",
                                background: "rgba(15, 23, 42, 0.35)",
                                fontSize: "0.8rem",
                                letterSpacing: "0.04em",
                                textTransform: "uppercase",
                            }}
                        >
                            <span
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "999px",
                                    background: "#22c55e",
                                    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.35)",
                                }}
                            />
                            <span>Privacy &amp; Data Protection</span>
                        </div>
                        <h1
                            style={{
                                margin: "1rem 0 0.25rem",
                                fontSize: "1.85rem",
                                fontWeight: 700,
                                letterSpacing: "0.02em",
                            }}
                        >
                            MEDICARE Apps
                        </h1>
                        <p
                            style={{
                                margin: "0 0 0.75rem",
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "#e5e7eb",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                            }}
                        >
                            INTEGRATED MEDICARE SOLUTION SDN. BHD
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "0.9rem",
                                color: "rgba(241, 245, 249, 0.9)",
                                maxWidth: "560px",
                            }}
                        >
                            This Privacy Policy explains how we collect, use, store and
                            protect personal data and patient information when you use
                            MEDICARE Apps.
                        </p>
                        <div
                            style={{
                                marginTop: "1.25rem",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1rem",
                                fontSize: "0.8rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    padding: "0.35rem 0.7rem",
                                    borderRadius: "999px",
                                    background: "rgba(15, 23, 42, 0.35)",
                                }}
                            >
                                <span
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "999px",
                                        background: "rgba(248, 250, 252, 0.9)",
                                    }}
                                />
                                <span>Last updated: 11 Dec 2025</span>
                            </div>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    padding: "0.35rem 0.7rem",
                                    borderRadius: "999px",
                                    background: "rgba(15, 23, 42, 0.35)",
                                }}
                            >
                                <span
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "999px",
                                        background: "rgba(248, 250, 252, 0.9)",
                                    }}
                                />
                                <span>Applies to: Mobile application (Android &amp; iOS)</span>
                            </div>
                        </div>
                    </header>

                    {/* Body */}
                    <div style={{ padding: "1.75rem" }}>
                        {/* Notice Banner */}
                        <div
                            style={{
                                display: "flex",
                                gap: "0.75rem",
                                padding: "0.75rem 1rem",
                                borderRadius: "10px",
                                background: "#ecfdf5",
                                border: "1px solid rgba(16, 185, 129, 0.35)",
                                fontSize: "0.9rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <div style={{ fontSize: "1.15rem" }}>ℹ️</div>
                            <div>
                                <strong>Please read carefully.</strong>
                                <p style={{ margin: "0.4rem 0 0", color: "#6b7280" }}>
                                    By registering an account, creating a patient profile or using
                                    any healthcare features in MEDICARE Apps, you agree to the
                                    collection and use of information in accordance with this
                                    Privacy Policy and applicable laws.
                                </p>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <h2 style={sectionTitleStyle}>1. Who we are</h2>
                        <p style={paragraphStyle}>
                            MEDICARE Apps is a healthcare-related mobile application operated
                            by{" "}
                            <span style={emphasisStyle}>
                                INTEGRATED MEDICARE SOLUTION SDN. BHD
                            </span>{" "}
                            ("<span style={emphasisStyle}>we</span>", "
                            <span style={emphasisStyle}>us</span>" or "
                            <span style={emphasisStyle}>our</span>").
                        </p>
                        <p style={paragraphStyle}>
                            We are committed to handling personal data and patient information
                            in a responsible, confidential and secure manner.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 2 */}
                        <h2 style={sectionTitleStyle}>2. Scope of this Policy</h2>
                        <p style={paragraphStyle}>This Privacy Policy applies to:</p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                Your use of MEDICARE Apps on Android and iOS.
                            </li>
                            <li style={listItemStyle}>
                                Data you provide when registering as a user or when registering
                                a patient profile.
                            </li>
                            <li style={listItemStyle}>
                                Healthcare-related information and interaction within the app,
                                such as patient records, notes or other data you choose to
                                submit.
                            </li>
                        </ul>

                        <hr style={dividerStyle} />

                        {/* Section 3 */}
                        <h2 style={sectionTitleStyle}>3. Information we collect</h2>
                        <p style={paragraphStyle}>
                            We only collect information that is necessary for user
                            registration, patient registration and the provision of our
                            healthcare-related services.
                        </p>

                        <h3 style={subSectionTitleStyle}>3.1 Account &amp; user information</h3>
                        <p style={paragraphStyle}>
                            When you register as a user, we may collect, store and process the
                            following information:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Full name</li>
                            <li style={listItemStyle}>
                                Email address and/or mobile phone number
                            </li>
                            <li style={listItemStyle}>
                                Login credentials (such as username and a hashed password)
                            </li>
                            <li style={listItemStyle}>
                                Role or user type (for example: staff, doctor, admin, caregiver)
                            </li>
                            <li style={listItemStyle}>
                                Basic profile details that you choose to provide
                            </li>
                        </ul>

                        <h3 style={subSectionTitleStyle}>3.2 Patient information</h3>
                        <p style={paragraphStyle}>
                            When you create or manage a patient profile, we may collect the
                            following patient-related data, depending on how the app is used:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                Patient full name and identification number (if required)
                            </li>
                            <li style={listItemStyle}>Date of birth, age and gender</li>
                            <li style={listItemStyle}>
                                Contact details (address, phone number, email, or guardian
                                details)
                            </li>
                            <li style={listItemStyle}>
                                Medical history and clinical notes that you choose to record
                            </li>
                            <li style={listItemStyle}>
                                Appointment details and visit records
                            </li>
                            <li style={listItemStyle}>
                                Other healthcare information entered into the app by you or your
                                healthcare provider
                            </li>
                        </ul>
                        <p style={{ ...paragraphStyle, color: "#b91c1c" }}>
                            Please do not enter information that is not relevant or necessary
                            for healthcare or administration purposes.
                        </p>

                        <h3 style={subSectionTitleStyle}>3.3 Usage data &amp; device information</h3>
                        <p style={paragraphStyle}>
                            To improve the security, reliability and performance of MEDICARE
                            Apps, we may collect certain technical and usage information, such
                            as:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                App usage logs (features used, screens visited, time stamps)
                            </li>
                            <li style={listItemStyle}>
                                Device information (device model, operating system version, app
                                version)
                            </li>
                            <li style={listItemStyle}>
                                IP address and general region (not precise location, unless you
                                enable it)
                            </li>
                            <li style={listItemStyle}>Crash reports and diagnostic data</li>
                        </ul>

                        <h3 style={subSectionTitleStyle}>3.4 Communications</h3>
                        <p style={paragraphStyle}>
                            If you contact us (for example via support email or in-app
                            support), we may store your message and contact details in order
                            to respond and improve our services.
                        </p>

                        <h3 style={subSectionTitleStyle}>3.5 Device permissions</h3>
                        <p style={paragraphStyle}>
                            Depending on how MEDICARE Apps is configured, we may request
                            access to certain features on your device. You will be asked for
                            permission before access is granted.
                        </p>
                        <p style={paragraphStyle}>Possible permissions may include:</p>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.4rem",
                                margin: "0.4rem 0 1.1rem",
                            }}
                        >
                            {[
                                "Camera (for medical photos or documents)",
                                "Photo gallery / files (upload reports or images)",
                                "Notifications (appointment reminders)",
                                "Location (if required for specific features)",
                            ].map((pill) => (
                                <span
                                    key={pill}
                                    style={{
                                        padding: "0.25rem 0.75rem",
                                        borderRadius: "999px",
                                        border: "1px solid #e5e7eb",
                                        fontSize: "0.8rem",
                                        color: "#6b7280",
                                        background: "#f9fafb",
                                    }}
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>
                        <p style={paragraphStyle}>
                            You may manage these permissions in your device settings. If you
                            disable a permission, certain features may not function properly.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 4 */}
                        <h2 style={sectionTitleStyle}>4. How we use your information</h2>
                        <p style={paragraphStyle}>
                            We use the collected data for the following purposes:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                To create and manage user accounts and patient profiles.
                            </li>
                            <li style={listItemStyle}>
                                To provide healthcare-related features and services within the
                                app.
                            </li>
                            <li style={listItemStyle}>
                                To store and organise patient records as entered by the user or
                                provider.
                            </li>
                            <li style={listItemStyle}>
                                To maintain the security and integrity of the system.
                            </li>
                            <li style={listItemStyle}>
                                To monitor, maintain and improve app performance and user
                                experience.
                            </li>
                            <li style={listItemStyle}>
                                To communicate with you regarding updates, security alerts, or
                                service information.
                            </li>
                            <li style={listItemStyle}>
                                To comply with legal and regulatory obligations, if applicable.
                            </li>
                        </ul>

                        <hr style={dividerStyle} />

                        {/* Section 5 */}
                        <h2 style={sectionTitleStyle}>5. Legal basis &amp; consent</h2>
                        <p style={paragraphStyle}>
                            By using MEDICARE Apps, you confirm that you have the authority to
                            provide the personal and patient data you enter, and that you
                            consent to us processing that data for the purposes stated in this
                            Policy and in accordance with applicable laws and regulations.
                        </p>
                        <p style={paragraphStyle}>
                            When registering minors or patients who are not able to provide
                            consent themselves, you confirm that you are authorised to act on
                            their behalf (for example as a parent, legal guardian, or
                            authorised healthcare provider).
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 6 */}
                        <h2 style={sectionTitleStyle}>6. Data sharing &amp; disclosure</h2>
                        <p style={paragraphStyle}>
                            We do <span style={emphasisStyle}>not</span> sell, rent or trade
                            your personal data or patient information to third parties for
                            marketing purposes.
                        </p>
                        <p style={paragraphStyle}>
                            We may share or allow access to data only in these limited
                            situations:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                <span style={emphasisStyle}>
                                    Internal authorised personnel:
                                </span>{" "}
                                authorised staff, healthcare providers or system administrators
                                within INTEGRATED MEDICARE SOLUTION SDN. BHD who require access
                                to perform their duties and support the services.
                            </li>
                            <li style={listItemStyle}>
                                <span style={emphasisStyle}>Service providers:</span> trusted
                                third-party vendors who provide infrastructure, hosting,
                                analytics, or support services (under appropriate
                                confidentiality and data protection agreements).
                            </li>
                            <li style={listItemStyle}>
                                <span style={emphasisStyle}>Legal obligations:</span> when
                                required by law, regulation, court order or governmental
                                request, and only to the extent necessary.
                            </li>
                            <li style={listItemStyle}>
                                <span style={emphasisStyle}>Business transfers:</span> in the
                                context of a merger, acquisition or restructuring, your data may
                                be transferred as part of the business assets, subject to
                                continued protection under this Policy or an equivalent policy.
                            </li>
                        </ul>

                        <hr style={dividerStyle} />

                        {/* Section 7 */}
                        <h2 style={sectionTitleStyle}>
                            7. Data security &amp; confidentiality
                        </h2>
                        <p style={paragraphStyle}>
                            We take reasonable technical and organisational measures to
                            protect personal data and patient information against unauthorised
                            access, alteration, disclosure or destruction.
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                Use of secure communication channels where appropriate.
                            </li>
                            <li style={listItemStyle}>
                                Access control based on user roles and responsibilities.
                            </li>
                            <li style={listItemStyle}>
                                Logical separation of environments, where applicable.
                            </li>
                            <li style={listItemStyle}>
                                Regular monitoring for suspicious activities within the system.
                            </li>
                        </ul>
                        <p style={paragraphStyle}>
                            While we strive to protect all information, no method of
                            transmission or storage is completely risk-free. We cannot
                            guarantee absolute security, but we are committed to continuously
                            improving our safeguards.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 8 */}
                        <h2 style={sectionTitleStyle}>8. Data retention</h2>
                        <p style={paragraphStyle}>
                            We retain personal data and patient records for as long as
                            necessary to fulfil the purposes described in this Policy or as
                            required by applicable law or professional guidelines.
                        </p>
                        <p style={paragraphStyle}>
                            When data is no longer required, we will take reasonable steps to
                            delete or de-identify it, unless we are legally required to keep
                            it for a longer period (for example for regulatory or audit
                            purposes).
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 9 */}
                        <h2 style={sectionTitleStyle}>9. Your rights &amp; choices</h2>
                        <p style={paragraphStyle}>
                            Subject to applicable laws, you may have the following rights
                            regarding your personal data:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>
                                Right to access: request a copy of your personal data held by
                                us.
                            </li>
                            <li style={listItemStyle}>
                                Right to correction: request that inaccurate or incomplete data
                                be corrected.
                            </li>
                            <li style={listItemStyle}>
                                Right to deletion: request deletion of certain personal data,
                                subject to legal and medical record obligations.
                            </li>
                            <li style={listItemStyle}>
                                Right to restriction or objection: restrict or object to
                                specific processing, where legally permitted.
                            </li>
                        </ul>
                        <p style={paragraphStyle}>
                            To exercise these rights, please contact us using the contact
                            details provided in Section 13.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 10 */}
                        <h2 style={sectionTitleStyle}>10. Children &amp; minors</h2>
                        <p style={paragraphStyle}>
                            MEDICARE Apps may be used to register patient profiles for
                            children or minors, but only by authorised adults such as parents,
                            legal guardians or healthcare providers.
                        </p>
                        <p style={paragraphStyle}>
                            We do not knowingly allow minors to create independent user
                            accounts without appropriate consent. If you believe that a minor
                            has provided personal data in violation of this Policy, please
                            contact us so that we can take appropriate action.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 11 */}
                        <h2 style={sectionTitleStyle}>
                            11. International data transfers (if applicable)
                        </h2>
                        <p style={paragraphStyle}>
                            Depending on our infrastructure and service providers, your
                            information may be stored or processed on servers located outside
                            of your country or region. In such cases, we will take reasonable
                            steps to ensure that your data is protected with an adequate level
                            of security and in accordance with this Policy and applicable data
                            protection laws.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 12 */}
                        <h2 style={sectionTitleStyle}>12. Changes to this Policy</h2>
                        <p style={paragraphStyle}>
                            We may update this Privacy Policy from time to time to reflect
                            changes in our practices, technology, or legal requirements. When
                            we do so, we will update the "Last updated" date at the top of
                            this page.
                        </p>
                        <p style={paragraphStyle}>
                            We encourage you to review this Policy periodically. Continued use
                            of MEDICARE Apps after any changes indicates that you have read
                            and accepted the updated Policy.
                        </p>

                        <hr style={dividerStyle} />

                        {/* Section 13 */}
                        <h2 style={sectionTitleStyle}>13. Contact us</h2>
                        <p style={paragraphStyle}>
                            If you have any questions, concerns, or requests concerning this
                            Privacy Policy or our data protection practices, you may contact
                            us at:
                        </p>

                        <div
                            style={{
                                marginTop: "1.25rem",
                                padding: "1rem 1.1rem",
                                borderRadius: "10px",
                                border: "1px dashed #e5e7eb",
                                background: "#f9fafb",
                                fontSize: "0.92rem",
                            }}
                        >
                            <div style={{ margin: "0.15rem 0" }}>
                                <span style={emphasisStyle}>Company:</span> INTEGRATED MEDICARE
                                SOLUTION SDN. BHD
                            </div>
                            <div style={{ margin: "0.15rem 0" }}>
                                <span style={emphasisStyle}>Address:</span> No.27 Jalan Sena 1,
                                81750 Taman Rinting, Masai, Johor
                            </div>
                            <div style={{ margin: "0.15rem 0" }}>
                                <span style={emphasisStyle}>Email:</span>{" "}
                                <a
                                    href="mailto:medicareflutter@gmail.com"
                                    style={{ color: "#0891b2" }}
                                >
                                    medicareflutter@gmail.com
                                </a>
                            </div>
                            <div style={{ margin: "0.15rem 0" }}>
                                <span style={emphasisStyle}>Phone:</span> 0167218909
                            </div>
                        </div>

                        <p
                            style={{
                                marginTop: "1rem",
                                fontSize: "0.8rem",
                                color: "#9ca3af",
                            }}
                        >
                            <strong>Note:</strong> This document is a general template for
                            informational purposes and does not constitute legal advice.
                            Please consult your legal or compliance advisor to ensure that
                            this Privacy Policy meets all regulatory requirements applicable
                            to your organisation and region.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

// Shared styles
const sectionTitleStyle: React.CSSProperties = {
    marginTop: "1.75rem",
    marginBottom: "0.5rem",
    fontWeight: 600,
    fontSize: "1.1rem",
    borderLeft: "3px solid #0f766e",
    paddingLeft: "0.6rem",
};

const subSectionTitleStyle: React.CSSProperties = {
    marginTop: "1.75rem",
    marginBottom: "0.5rem",
    fontWeight: 600,
    fontSize: "1rem",
    color: "#0f172a",
};

const paragraphStyle: React.CSSProperties = {
    margin: "0.4rem 0 0.75rem",
    color: "#6b7280",
    fontSize: "0.94rem",
};

const listStyle: React.CSSProperties = {
    margin: "0.3rem 0 0.9rem 1.25rem",
    padding: 0,
};

const listItemStyle: React.CSSProperties = {
    margin: "0.2rem 0",
    color: "#6b7280",
    fontSize: "0.94rem",
};

const dividerStyle: React.CSSProperties = {
    height: "1px",
    border: 0,
    background:
        "linear-gradient(to right, transparent, rgba(148, 163, 184, 0.35), transparent)",
    margin: "1.5rem 0",
};

const emphasisStyle: React.CSSProperties = {
    fontWeight: 600,
    color: "#0f172a",
};

export default PrivacyPolicy;
