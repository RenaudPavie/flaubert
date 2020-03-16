<template>
  <div id="sidebar">
    <div class="logoSidebar">
      <a href="/">
        <img src="@/assets/images/logo/logo-flaubert.png" alt="Logo Lycée Flaubert" />
      </a>
    </div>
    <vs-button @click="active=!active" id="openSidebar">
      <img src="@/assets/images/elements/menu.svg" alt="Bouton ouverture menu" />
    </vs-button>
    
    
    <vs-sidebar
      parent="body"
      default-index="1"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <vs-divider></vs-divider>

      <b-nav-form class="flex justify-content-center">
        <b-form-input
          size="sm"
          class="d-block d-lg-none sidebarSearch"
          placeholder="Recherche..."
        ></b-form-input>
      </b-nav-form>

      <vs-divider class="customDivider">Menu</vs-divider>

      <vs-sidebar-group
        :title="mainGroup.title"
        :key="mainGroup.id"
        v-for="mainGroup in mainGroupSidebar"
        class="mainGroup"
        v-bind:style="`background-color: ${mainGroup.color} !important;`"
        :index="mainGroup.index"
      >
        <vs-sidebar-item :index="link.index" :href="link.title" :key="link.id" v-for="link in mainGroup.directItem">{{ link.title }}</vs-sidebar-item>

        <vs-sidebar-group
          :title="group.title"
          :key="group.id"
          v-for="group in  mainGroup.groupItem"
          class="groupItem"
          :index="group.index"
          
        >
          <vs-sidebar-item
            :key="item.id"
            v-for="item in group.itemInGroup"
            class="itemInGroup"
            :style="`color:${mainGroup.color} !important`"
            :index="item.index"
          >{{ item.title }}</vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar-group>

      <!-- <vs-divider></vs-divider> -->


      <!-- <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>-->
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name:'Sidebar',
  data: () => ({
    active: false,
    mainGroupSidebar: [
      {
        title: "Lycée Général",
        color:'#028985',
        index:"1",
        directItem: [
          {
            title: "Toutes les actualités",
            index:"1.1",
          },
          {
            title: "Evénements",
            index:"1.2"
          },
          {
            title: "Situation/Contact",
            index:"1.3"
          }
        ],
        groupItem: [
          {
            title: "Voies générales et technologique",
            index:"1.4",
            itemInGroup: [
              {
                title: "Abibac",
                index:"1.4.1",
              },
              {
                title: "Euro Allemand",
                index:"1.4.2",
              },
              {
                title: "Euro Anglais",
                index:"1.4.3",
              },
              {
                title: "OIB",
                index:"1.4.4",
              },
              {
                title: "Enseignements Optionnels",
                index:"1.4.5",
              },
              {
                title: "Seconde",
                index:"1.4.6",
              }
            ]
          },
          {
            title: "Filières",
            index:'1.5',
            itemInGroup: [
              {
                title: "Les spécialités",
                index:'1.5.1'
              },
              {
                title: "Bac Général",
                index:'1.5.2'
              },
              {
                title: "Bac Technologique",
                index:'1.5.3'
              }
            ]
          },
          {
            title: "Activités culturelles et sportives",
            index:'1.6',
            itemInGroup: [
              {
                title: "Mast'Arts Class",
                index:'1.6.1'
              },
              {
                title: "Théâtre",
                index:'1.6.2'
              },
              {
                title: "Danse",
                index:'1.6.3'
              },
              {
                title: "UNSS",
                index:'1.6.4'
              },
              {
                title: "Escrime",
                index:'1.6.5'
              },
              {
                title: "SECTION HOCKEY",
                index:'1.6.6'
              }
            ]
          }
        ]
      },
      {
        title: "Lycée Professionnel",
        color:'#7a49b0',
        index:"2",
        directItem: [
          {
            title: "Toutes les actualités",
            index:"2.1",
          },
          {
            title: "Evénements",
            index:"2.2"
          },
          {
            title: "Situation/Contact",
            index:"2.3"
          }
        ],
        groupItem: [
          {
            title: "Voies générales et technologique",
            index:"2.4",
            itemInGroup: [
              {
                title: "Abibac",
                index:"2.4.1",
              },
              {
                title: "Euro Allemand",
                index:"2.4.2",
              },
              {
                title: "Euro Anglais",
                index:"2.4.3",
              },
              {
                title: "OIB",
                index:"2.4.4",
              },
              {
                title: "Enseignements Optionnels",
                index:"2.4.5",
              },
              {
                title: "Seconde",
                index:"2.4.6",
              }
            ]
          },
          {
            title: "Filières",
            index:'2.5',
            itemInGroup: [
              {
                title: "Les spécialités",
                index:'2.5.1'
              },
              {
                title: "Bac Général",
                index:'2.5.2'
              },
              {
                title: "Bac Technologique",
                index:'2.5.3'
              }
            ]
          },
          {
            title: "Activités culturelles et sportives",
            index:'2.6',
            itemInGroup: [
              {
                title: "Mast'Arts Class",
                index:'2.6.1'
              },
              {
                title: "Théâtre",
                index:'2.6.2'
              },
              {
                title: "Danse",
                index:'2.6.3'
              },
              {
                title: "UNSS",
                index:'2.6.4'
              },
              {
                title: "Escrime",
                index:'2.6.5'
              },
              {
                title: "SECTION HOCKEY",
                index:'2.6.6'
              }
            ]
          }
        ]
      },
      {
        title: "Flaubert SUP",
        color:"#d17335",
        index:"3",
        directItem: [
          {
            title: "Toutes les actualités",
            index:"3.1",
          },
          {
            title: "Evénements",
            index:"3.2"
          },
          {
            title: "Situation/Contact",
            index:"3.3"
          }
        ],
        groupItem: [
          {
            title: "Voies générales et technologique",
            index:"3.4",
            itemInGroup: [
              {
                title: "Abibac",
                index:"3.4.1",
              },
              {
                title: "Euro Allemand",
                index:"3.4.2",
              },
              {
                title: "Euro Anglais",
                index:"3.4.3",
              },
              {
                title: "OIB",
                index:"3.4.4",
              },
              {
                title: "Enseignements Optionnels",
                index:"3.4.5",
              },
              {
                title: "Seconde",
                index:"3.4.6",
              }
            ]
          },
          {
            title: "Filières",
            index:'3.5',
            itemInGroup: [
              {
                title: "Les spécialités",
                index:'3.5.1'
              },
              {
                title: "Bac Général",
                index:'3.5.2'
              },
              {
                title: "Bac Technologique",
                index:'3.5.3'
              }
            ]
          },
          {
            title: "Activités culturelles et sportives",
            index:'3.6',
            itemInGroup: [
              {
                title: "Mast'Arts Class",
                index:'3.6.1'
              },
              {
                title: "Théâtre",
                index:'3.6.2'
              },
              {
                title: "Danse",
                index:'3.6.3'
              },
              {
                title: "UNSS",
                index:'3.6.4'
              },
              {
                title: "Escrime",
                index:'3.6.5'
              },
              {
                title: "SECTION HOCKEY",
                index:'3.6.6'
              }
            ]
          }
        ]
      },
      {
        title: "Erasmus+",
        color:"#333333",
        index:"4",
        directItem: [
          {
            title: "Toutes les actualités",
            index:"4.1",
          },
          {
            title: "Evénements",
            index:"4.2"
          },
          {
            title: "Situation/Contact",
            index:"4.3"
          }
        ],
        groupItem: [
          {
            title: "Voies générales et technologique",
            index:"4.4",
            itemInGroup: [
              {
                title: "Abibac",
                index:"4.4.1",
              },
              {
                title: "Euro Allemand",
                index:"4.4.2",
              },
              {
                title: "Euro Anglais",
                index:"4.4.3",
              },
              {
                title: "OIB",
                index:"4.4.4",
              },
              {
                title: "Enseignements Optionnels",
                index:"4.4.5",
              },
              {
                title: "Seconde",
                index:"4.4.6",
              }
            ]
          },
          {
            title: "Filières",
            index:'4.5',
            itemInGroup: [
              {
                title: "Les spécialités",
                index:'4.5.1'
              },
              {
                title: "Bac Général",
                index:'4.5.2'
              },
              {
                title: "Bac Technologique",
                index:'4.5.3'
              }
            ]
          },
          {
            title: "Activités culturelles et sportives",
            index:'4.6',
            itemInGroup: [
              {
                title: "Mast'Arts Class",
                index:'4.6.1'
              },
              {
                title: "Théâtre",
                index:'4.6.2'
              },
              {
                title: "Danse",
                index:'4.6.3'
              },
              {
                title: "UNSS",
                index:'4.6.4'
              },
              {
                title: "Escrime",
                index:'4.6.5'
              },
              {
                title: "SECTION HOCKEY",
                index:'4.6.6'
              }
            ]
          }
        ]
      },
      {
        title: "Agenda",
        color:"#F1F1F1",
        index:"5",
        directItem: [
          {
            title: "Toutes les actualités",
            index:"5.1",
          },
          {
            title: "Evénements",
            index:"5.2"
          },
          {
            title: "Situation/Contact",
            index:"5.3"
          }
        ],
        groupItem: [
          {
            title: "Voies générales et technologique",
            index:"5.4",
            itemInGroup: [
              {
                title: "Abibac",
                index:"5.4.1",
              },
              {
                title: "Euro Allemand",
                index:"5.4.2",
              },
              {
                title: "Euro Anglais",
                index:"5.4.3",
              },
              {
                title: "OIB",
                index:"5.4.4",
              },
              {
                title: "Enseignements Optionnels",
                index:"5.4.5",
              },
              {
                title: "Seconde",
                index:"5.4.6",
              }
            ]
          },
          {
            title: "Filières",
            index:'5.5',
            itemInGroup: [
              {
                title: "Les spécialités",
                index:'5.5.1'
              },
              {
                title: "Bac Général",
                index:'5.5.2'
              },
              {
                title: "Bac Technologique",
                index:'5.5.3'
              }
            ]
          },
          {
            title: "Activités culturelles et sportives",
            index:'5.6',
            itemInGroup: [
              {
                title: "Mast'Arts Class",
                index:'5.6.1'
              },
              {
                title: "Théâtre",
                index:'5.6.2'
              },
              {
                title: "Danse",
                index:'5.6.3'
              },
              {
                title: "UNSS",
                index:'5.6.4'
              },
              {
                title: "Escrime",
                index:'5.6.5'
              },
              {
                title: "SECTION HOCKEY",
                index:'5.6.6'
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/assets/scss/libs/variables";
#sidebar {
  justify-content: space-between;

  .logoSidebar {
    img {
      max-height: 80px;
    }
  }
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > button {
      margin-left: 10px;
    }
  }
}
#sidebar {  
    button#openSidebar {
      background-color: $c2 !important;
      border-radius: 20px;
      padding:5px;

      span {
        height: 30px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .sidebarSearch {
    margin-top: 5px !important;
  }
  .vs-sidebar {
    .vs-divider-border {
      border-top-color:rgba(255, 255, 255, 1) !important;
    }
    .vs-divider.customDivider {
      .vs-divider--text {
        color: $c5 !important;
        text-transform: uppercase;
        background: $c3 !important;
      }
    }
      .vs-sidebar--items {
        background-color: $c3;
      }
      a:active, a:visited, a:hover, a {
        color: $c5 !important;
        text-decoration: none;
      }
      .vs-sidebar-group.mainGroup>h4 {
        font-size: 1rem;
        color:$c5;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 0;
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .vs-sidebar-group.mainGroup .vs-sidebar-group.groupItem h4 {
        font-size: 0.70rem;
        color:$c5;
        text-transform: uppercase;
        font-weight: 600;
      }
      .vs-sidebar-item-active.itemInGroup {
        border-right:3px solid $c2 !important;
      }
      .vs-icon {
        font-size: 1.2rem;
      }
      .vs-sidebar-group.mainGroup:last-child {
        h4 {
          color: $c3 !important;
        }
        a:active, a:visited, a:hover, a {
        color: $c3 !important;
      }
      }
  }
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}

</style>