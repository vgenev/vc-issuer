const createEmailCredentialPayload = (
  sub,
  emailAddress
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "Email"],
    credentialSchema: {
      id: "did:ethr:rsk:0x8a32da624dd9fad8bf4f32d9456f374b60d9ad28;id=1eb2af6b-0dee-6090-cb55-0ed093f9b026;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { emailAddress },
  },
});

const createPhoneNumberCredentialPayload = (
  sub,
  phoneNumber
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "Phone"],
    credentialSchema: {
      id: "did:ethr:rsk:0x8a32da624dd9fad8bf4f32d9456f374b60d9ad28;id=41ab7167-d98a-4572-b8de-fcc32289728c;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { phoneNumber },
  },
});

const createDoBCredentialPayload = (
  sub,
  dateOfBirth
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "DateOfBirth"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=1ced84a4-559b-4d35-add2-f5484338e43f;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { dateOfBirth },
  },
});

const createBHCreditScoreCredentialPayload = (
  sub,
  BHCredcreditScore
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "BHCreditScore"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=093ecd98-42d0-4efc-8950-f8cbf0eaad35;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { BHCredcreditScore },
  },
});

const createDependantsCredentialPayload = (
  sub,
  dependants
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "Dependants"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=b89fbdb0-0083-48a3-ae7e-c8bb43b6f252;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { dependants },
  },
});

const createEmploymentStatusCredentialPayload = (
  sub,
  employmentStatus
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "EmploymentStatus"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=7849b7ed-4bec-4e14-a58f-994cb5805d5a;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { employmentStatus },
  },
});

const createHighestEducationAttainedCredentialPayload = (
  sub,
  highestEducationAttained
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "HighestEducationAttained"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=afb0301f-5224-40a2-9383-8bbc75021a00;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { highestEducationAttained },
  },
});

const createKYCStatusCredentialPayload = (
  sub,
  kycStatus
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "KYCStatus"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=be7eaf37-9c05-4c24-a5d0-6a362e899690;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { kycStatus },
  },
});


const createRelationshipStatusCredentialPayload = (
  sub,
  relationshipStatus
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "RelationshipStatus"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=9afa929b-7718-4840-bf28-db27658c6704;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { relationshipStatus },
  },
});

const createCitizenshipCredentialPayload = (
  sub,
  citizenship
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "Citizenship"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=23730a1d-8f25-4c6a-b527-7f8ad901eea9;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { citizenship },
  },
});

const createAgeCredentialPayload = (
  sub,
  age
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "Age"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=031c9883-0f94-4d26-8fbd-c73aef407ce5;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { age },
  },
});

const createAverageMonthlyIncomeCredentialPayload = (
  sub,
  averageMonthlyIncome
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "AverageMonthlyIncome"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=26c334d5-ee07-4dae-a789-05e3a6277d71;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { averageMonthlyIncome },
  },
});

const createAverageMonthlyRestCredentialPayload = (
  sub,
  averageMonthlyRest
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "AverageMonthlyRest"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=e3a83116-c226-43ab-ab29-a647a1d2cb5e;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { averageMonthlyRest },
  },
});

const createSavingPercentageCredentialPayload = (
  sub,
  savingPercentage
) => ({
  issuanceDate: new Date(),
  sub,
  vc: {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "SavingPercentage"],
    credentialSchema: {
      id: "did:ethr:rsk:0x6a3035ec3137beeb6789ffa90898ccad5cd06f79;id=606d0f64-83ef-4860-bd6a-a829eb75bb58;version=1.0",
      type: "JsonSchemaValidator2018",
    },
    credentialSubject: { savingPercentage },
  },
});

module.exports = {
  createDoBCredentialPayload,
  createEmailCredentialPayload,
  createPhoneNumberCredentialPayload,
  createBHCreditScoreCredentialPayload,
  createDependantsCredentialPayload,
  createEmploymentStatusCredentialPayload,
  createHighestEducationAttainedCredentialPayload,
  createKYCStatusCredentialPayload,
  createRelationshipStatusCredentialPayload,
  createCitizenshipCredentialPayload,
  createAgeCredentialPayload,
  createAverageMonthlyIncomeCredentialPayload,
  createAverageMonthlyRestCredentialPayload,
  createSavingPercentageCredentialPayload
}