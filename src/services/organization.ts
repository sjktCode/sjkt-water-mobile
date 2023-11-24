import { useQuery } from "@apollo/client";

import { GET_ORG } from "@/graphql/organization";
import { TOrganizationQuery } from "@/utils/types";

export const useOrganization = (id: string) => {
  const { loading, data } = useQuery<TOrganizationQuery>(GET_ORG, {
    variables: {
      id,
    },
  });

  return {
    loading,
    data: data?.getOrganizationInfo.data,
  };
};
