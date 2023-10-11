export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

interface ProductItemProps {
  product_icon: string | null
  product_name: string | null
}

export interface UserProps {
  id: string
  email?: string | undefined
}
export interface Database {
  length: number
  map(
    arg0: (prod: ProductItemProps) => import('react').JSX.Element
  ): import('react').ReactNode
  public: {
    Tables: {
      clients: {
        Row: {
          client_email: string | null
          client_name: string | null
          created_at: string
          id: string
        }
        Insert: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          id: string
        }
        Update: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      materials: {
        Row: {
          collect_date: string | null
          created_at: string
          id: string
          material_name: string | null
          percentage: number | null
        }
        Insert: {
          collect_date?: string | null
          created_at?: string
          id?: string
          material_name?: string | null
          percentage?: number | null
        }
        Update: {
          collect_date?: string | null
          created_at?: string
          id?: string
          material_name?: string | null
          percentage?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string
          id: string
          product_icon: string | null
          product_name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_icon?: string | null
          product_name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_icon?: string | null
          product_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: []
      }
      rel_clients_products: {
        Row: {
          client_id: string
          created_at: string
          id: number
          product_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: number
          product_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: number
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_clients_products_client_id_fkey'
            columns: ['client_id']
            referencedRelation: 'clients'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_clients_products_product_id_fkey'
            columns: ['product_id']
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      rel_materials_secondLife: {
        Row: {
          created_at: string
          id: number
          material_id: string
          second_life_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          material_id: string
          second_life_id: string
        }
        Update: {
          created_at?: string
          id?: number
          material_id?: string
          second_life_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_materials_secondLife_material_id_fkey'
            columns: ['material_id']
            referencedRelation: 'materials'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_materials_secondLife_second_life_id_fkey'
            columns: ['second_life_id']
            referencedRelation: 'second_life'
            referencedColumns: ['id']
          }
        ]
      }
      rel_products_materials: {
        Row: {
          created_at: string
          id: number
          material_id: string
          product_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          material_id: string
          product_id: string
        }
        Update: {
          created_at?: string
          id?: number
          material_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_products_materials_material_id_fkey'
            columns: ['material_id']
            referencedRelation: 'materials'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_products_materials_product_id_fkey'
            columns: ['product_id']
            referencedRelation: 'products'
            referencedColumns: ['id']
          }
        ]
      }
      rel_profiles_clients: {
        Row: {
          client_id: string
          created_at: string
          id: number
          profile_id: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: number
          profile_id: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'rel_profiles_clients_client_id_fkey'
            columns: ['client_id']
            referencedRelation: 'clients'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'rel_profiles_clients_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      second_life: {
        Row: {
          created_at: string
          id: string
          life_icon: string | null
          life_name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          life_icon?: string | null
          life_name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          life_icon?: string | null
          life_name?: string | null
        }
        Relationships: []
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
