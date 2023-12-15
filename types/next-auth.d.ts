import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: number,
            email: string,
            first_name?: string | null,
            last_name?: string | null,
            username?: string | null,
            phone_number?: string | null,
            role?: string | null,
            created_at?: string | null,
            updated_at?: string | null,
            sub_role?: string | null,
            status?: string | null,
            verification_token?: string | null,
            admin_invitation_code?: string | null,
            admin_invitation_sent_at?: string | null,
            address?: string | null,
            street?: string | null,
            town?: string | null,
            city?: string | null,
            province?: string | null,
            profile_image_url?: string | null
        }
        company?: {
            id: number,
            company_name: string,
            invitation_code?: string | null,
            invitation_sent_at?: string | null
            status: string,
            role: string,
            created_at?: string | null,
            updated_at?: string | null,
            email?: string | null,
            first_name?: string | null,
            last_name?: string | null,
            user_id?: string | null,
            phone_number?: string | null,
            mobile_number?: string | null,
            address?: string | null,
            street?: string | null,
            town?: string | null,
            city?: string | null,
            province?: string | null,
            business_nature?: string | null,
            country?: any | null,
            referral_fee?: number
        }
        cart?: {
            id:number,
            user_id: number,
            created_at?: string,
            updated_at?: string,
            cart_type?: string,
            is_active?: boolean,
            country?: string,
            city?: string,
            box_size?: string,
            box_id?: number,
            delivery_type?: string,
            volume_percentage?: string,
            courier_id?: number,
            company_id?: number,
            address_1?:string,
            address_2?: string,
            zip_code?: string,
        },
        store?: {
            id: 83,
            user_id: 106,
            business_name?: string | null,
            owner_name?: string | null,
            bank_account_number?: string | null,
            mobile_number?: string | null,
            email?: string | null,
            is_pending?: boolean,
            created_at?: string | null,
            updated_at?: string | null,
            invitation_code?: string | null,
            is_invitation_sent?: string | null,
            invitation_sent_at?: string | null,
            store_type?: string | null,
            is_approved_at?: string | null,
            status?: string | null,
            reject_reason?: string | null,
            reject_notes?: string | null,
            interviewee_id?: string | null,
            bank_id?: string | null,
            notes?: string | null,
            seller_code?: string | null,
            license_number?: string | null,
            tax?: string | null,
            has_online_store?: boolean,
            invitation_seller_code?: string | null,
            interviewee_name?: string | null,
            interviewer_name?: string | null,
            countries?: any | null,
            country?: string | null
        },
        token?: string | null
        status: number,
    }
    interface JWT {
        id: number,
        email: string,
        first_name?: string | null,
        last_name?: string | null,
        username?: string | null,
        phone_number?: string | null,
        role?: string | null,
        created_at?: string | null,
        updated_at?: string | null,
        sub_role?: string | null,
        status?: string | null,
        verification_token?: string | null,
        admin_invitation_code?: string | null,
        admin_invitation_sent_at?: string | null,
        address?: string | null,
        street?: string | null,
        town?: string | null,
        city?: string | null,
        province?: string | null,
        profile_image_url?: string | null
        cart?: {
            id:number,
            user_id: number,
            created_at?: string,
            updated_at?: string,
            cart_type?: string,
            is_active?: boolean,
            country?: string,
            city?: string,
            box_size?: string,
            box_id?: number,
            delivery_type?: string,
            volume_percentage?: string,
            courier_id?: number,
            company_id?: number,
            address_1?:string,
            address_2?: string,
            zip_code?: string,
        },
        company?: {
            id: number,
            company_name: string,
            invitation_code?: string | null,
            invitation_sent_at?: string | null
            status: string,
            role: string,
            created_at?: string | null,
            updated_at?: string | null,
            email?: string | null,
            first_name?: string | null,
            last_name?: string | null,
            user_id?: string | null,
            phone_number?: string | null,
            mobile_number?: string | null,
            address?: string | null,
            street?: string | null,
            town?: string | null,
            city?: string | null,
            province?: string | null,
            business_nature?: string | null,
            country?: any | null,
            referral_fee?: number
        }
        store?: {
            id: 83,
            user_id: 106,
            business_name?: string | null,
            owner_name?: string | null,
            bank_account_number?: string | null,
            mobile_number?: string | null,
            email?: string | null,
            is_pending?: boolean,
            created_at?: string | null,
            updated_at?: string | null,
            invitation_code?: string | null,
            is_invitation_sent?: string | null,
            invitation_sent_at?: string | null,
            store_type?: string | null,
            is_approved_at?: string | null,
            status?: string | null,
            reject_reason?: string | null,
            reject_notes?: string | null,
            interviewee_id?: string | null,
            bank_id?: string | null,
            notes?: string | null,
            seller_code?: string | null,
            license_number?: string | null,
            tax?: string | null,
            has_online_store?: boolean,
            invitation_seller_code?: string | null,
            interviewee_name?: string | null,
            interviewer_name?: string | null,
            countries?: any | null,
            country?: string | null
        },
        token?: string | null
        status: number,
    }
}
