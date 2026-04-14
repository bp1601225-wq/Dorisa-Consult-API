const allowedRoles = ["Admin", "ProjectLead", "Consultant"];

import type { UserWhereInput } from "@prisma/client";

export const RoleBasedFetched = {

  BuildProposalServiceWhere(user: any) {
    if (allowedRoles.includes(user.role)) {
      return {}; // can see everything
    }

    return {
      clientId: user.id,
    };
  },

  BuildReviewsWhere(user: any) {
    if (allowedRoles.includes(user.role)) {
      return {}; // can see everything
    }

    return {
      client_id: user.id,
    };
  },


  //  fetch users for admin only not other roles
  FetchRolesForAdminOnly(user: { id: string; role: string }): UserWhereInput {
    const allowedAdmin = "Admin";

    if (user.role === allowedAdmin) {
      return {}; // Admin can see every user
    }

    return { id: user.id }; // Other roles only see their own record
  },







};
