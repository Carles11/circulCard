export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          client_email: string | null
          client_name: string | null
          created_at: string
          id: string
          is_complete: boolean | null
          product_id: string[] | null
          user_id: string | null
        }
        Insert: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          id?: string
          is_complete?: boolean | null
          product_id?: string[] | null
          user_id?: string | null
        }
        Update: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          id?: string
          is_complete?: boolean | null
          product_id?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      materials: {
        Row: {
          client_id: string[] | null
          collection_date: string | null
          created_at: string
          id: number
          product_name: string | null
          recycled_date: string | null
        }
        Insert: {
          client_id?: string[] | null
          collection_date?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
          recycled_date?: string | null
        }
        Update: {
          client_id?: string[] | null
          collection_date?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
          recycled_date?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          clients_id: string | null
          created_at: string
          id: number
          product_name: string | null
        }
        Insert: {
          clients_id?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
        }
        Update: {
          clients_id?: string | null
          created_at?: string
          id?: number
          product_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_clients_id_fkey"
            columns: ["clients_id"]
            referencedRelation: "clients"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
